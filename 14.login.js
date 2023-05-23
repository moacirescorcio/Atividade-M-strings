import { question } from "readline-sync";

function main(){
    const nome = question('Digite seu nome: ')

    const valores = nome.split(' ')
    let login =''
    for(let palavra of valores){
        login += palavra[0].toLocaleLowerCase()
    }

    console.log(`Seu login é composto por suas iniciais: ${login}`)
}

main()