import { question } from "readline-sync";

//10. Uma palavra é palíndroma se ela não se altera quando lida da direita para esquerda. Por exemplo, raiar é palíndroma. Escreva um programa que verifique se uma palavra digitada é palíndroma.

function main(){
    const palavra = question('Digite uma palavra: ')

    if(eh_polindrona(palavra)){
        console.log('É políndrona!')
    }else{
        console.log('Não é políndrona!')
    }

    
}

function eh_polindrona(v){
    let palavra_invertida = ''
    for (let letra of v){
        palavra_invertida = letra + palavra_invertida
    }
    if (palavra_invertida === v){
        return true
    }else{
        return false
    }
}

main()