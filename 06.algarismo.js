import { question } from "readline-sync";

function main(){
    const frase = question('Digite um frase: ')

    //const alfabeto = ['q','w','r','t','y','p','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','a','e','i', 'o', 'u']
    let nova_frase =''
    for (let letra of frase){
        if (letra == '1'){
            letra = 'um'
        }else if(letra == '2'){
            letra = 'dois'
        }else if(letra == '3'){
            letra = 'três'
        }else if(letra == '4'){
            letra = 'quatro'
        }else if(letra == '5'){
            letra = 'cinco'
        }else if(letra == '6'){
            letra = 'seis'
        }else if(letra == '7'){
            letra = 'sete'
        }else if(letra == '8'){
            letra = 'oito'
        }else if(letra == '9'){
            letra = 'nove'
        }else if(letra == '0'){
            letra = 'zero'
        }else{
            letra = letra
        }
    nova_frase += letra
    }
    console.log(nova_frase)
}

main()