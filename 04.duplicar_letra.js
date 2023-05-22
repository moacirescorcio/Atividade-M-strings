import { question } from "readline-sync";

function main(){
    const frase = question('Digite uma frase: ')

    let nova_frase = ''
    for (let letra of frase){
        letra = letra + letra
        nova_frase += letra
    }
    console.log(nova_frase)
}   

main()