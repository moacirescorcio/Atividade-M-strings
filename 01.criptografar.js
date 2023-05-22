import { question } from "readline-sync";

function main(){
    const frase = question('Digite uma frase: ')

    let frase_criptogrda = ''
    const consoantes = ['q','w','r','t','y','p','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']

    for(let letra of (frase).toLowerCase()){
        for(let consoante of consoantes){
            if (letra === consoante ){
                letra = '#'
            }else{
                letra = letra
            }
        }
    frase_criptogrda = letra + frase_criptogrda
    }
    console.log(`Frase criptografada: ${frase_criptogrda}`)
}

main()