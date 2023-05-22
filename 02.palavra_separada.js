import { question } from "readline-sync";

function main(){
    const frase = question('Digite um frase: ')

    let palavra = frase.split(' ')
    //console.log(palavra)
    
    for(let letra of palavra){
        console.log(letra)
    }
}

main()