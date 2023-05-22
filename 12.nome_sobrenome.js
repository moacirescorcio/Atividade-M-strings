import { question } from "readline-sync";

//12. As companhias de transportes aéreos costumam representar os nomes dos passageiros no formato último sobrenome/nome. Por exemplo, o passageiro Carlos Drummond de Andrade seria indicado por Andrade/Carlos. Escreva um programa que leia um nome completo e o escreva no formato acima.

function main(){
    const nome_completo = question('Digite seu nome completo: ')

    let array_nome_completo = nome_completo.split(' ')
    const nome = array_nome_completo[0]
    const sobrenome = array_nome_completo[array_nome_completo.length - 1]

    console.log(`${sobrenome}/${nome}`)
    
}

main()