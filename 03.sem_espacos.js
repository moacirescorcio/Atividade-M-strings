import { question } from "readline-sync";

//3. Leia uma frase e gere uma nova frase, retirando os espaços entre as palavras.

function main(){
    const frase = question('Digite uma frase: ')

    let nova_frase =''
    for (let letra of frase){
        if (letra === ' '){
            continue
        }else{
            nova_frase += letra
        }
    }
    console.log(`Frase sem espaços: ${nova_frase}`)
}

main()