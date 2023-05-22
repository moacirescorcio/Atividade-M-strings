import { question } from "readline-sync";

//8. Leia uma string no formato hh:mm:ss e escreva o resultado na seguinte forma: “hh hora(s), mm minuto(s) e ss segundo(s)”.

function main(){
    const tempo = question('Digite hh:mm:ss : ')

    const valores = tempo.split(':')
    const hh = valores[0]
    const mm = valores[1]
    const ss = valores[2]

    console.log(`${hh} hora(s), ${mm} minuto(s) e ${ss} segundo(s)`)
}

main()