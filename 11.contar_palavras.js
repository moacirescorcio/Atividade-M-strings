import { question } from "readline-sync";

//11. Um dos recursos disponibilizados pelos editores de texto mais modernos é a contagem da quantidade de palavras de um texto. Escreva um programa que determine o numero de palavras de um texto digitado.

function main(){
    const texto = question('Digite o texto: ')

    const array_texto = texto.split(' ')
    let contador = 0
    for(let palavra of array_texto){
        contador++
    }
    console.log(`${contador} palavras!`)
    
}

main()