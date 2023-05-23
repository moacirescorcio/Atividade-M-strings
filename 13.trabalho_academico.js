import { question } from "readline-sync";

//13. As normas para a exibição da bibliografia de um artigo cientifico, de uma monografia, de um livro, texto etc., exigem que o nome do autor seja escrito no formato último sobrenome, sequência das primeiras letras do nome e dos demais sobrenomes, seguidas de ponto final. Por exemplo, Antonio Carlos Jobim seria referido por Jobim, A. C.. Escreva um programa que receba um nome completo e o escreva no formato de bibliografia.

function main(){
    const nome_completo = question('Digite seu nome completo: ')

    let array_nome_completo = nome_completo.split(' ')
    const nome = array_nome_completo[0]
    const sobrenome = array_nome_completo[array_nome_completo.length - 1]

    let n = ''
    let palavra = ''
    for (let nome of array_nome_completo){
        if (nome === sobrenome){
            break
        }
        n += nome[0]+'.'+' '
        
    }

    console.log(`${sobrenome}, ${n}`)

    
}

main()