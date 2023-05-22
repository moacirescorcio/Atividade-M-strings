import { question } from "readline-sync";

function main(){
    const nome_completo = question('Digite seu nome completo: ')

    let array_nome_completo = nome_completo.split(' ')
    const nome = array_nome_completo[0]
    const sobrenome = array_nome_completo[array_nome_completo.length - 1]

    let n = ''
    for (let primeira_letra of nome){
        n = primeira_letra
        break
    }

    console.log(`${sobrenome}, ${n}.`)

    
}

main()