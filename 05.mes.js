import { question } from "readline-sync";

function main(){
    const data = question('Digite uma data (DD/MM/AAAA): ')

    const valores = data.split('/')
    const dia = valores[0]
    const mes = valores[1]
    const ano = valores[2]

    if(mes === '01'){
        console.log(`${dia} de janeiro de ${ano}`)
    }else if(mes === '02'){
        console.log(`${dia} de fevereiro de ${ano}`)
    }else if(mes === '03'){
        console.log(`${dia} de março de ${ano}`)
    }else if(mes === '04'){
        console.log(`${dia} de abril de ${ano}`)
    }else if(mes === '05'){
        console.log(`${dia} de maio de ${ano}`)
    }else if(mes === '06'){
        console.log(`${dia} de junho de ${ano}`)
    }else if(mes === '07'){
        console.log(`${dia} de julho de ${ano}`)
    }else if(mes === '08'){
        console.log(`${dia} de agosto de ${ano}`)
    }else if(mes === '09'){
        console.log(`${dia} de setembro de ${ano}`)
    }else if(mes === '10'){
        console.log(`${dia} de outubro de ${ano}`)
    }else if(mes === '11'){
        console.log(`${dia} de novembro de ${ano}`)
    }else if(mes === '12'){
        console.log(`${dia} de dezembro de ${ano}`)
    }
}

main()