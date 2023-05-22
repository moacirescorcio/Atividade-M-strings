import { question } from "readline-sync";

function main(){
    const senha = question('Digite sua senha: ')
    const senha_correta = 'senha123'
    

    let senha_digitada = ''
    for(let caracter of senha){
        caracter = '*'
        senha_digitada += caracter
        
    }

    console.log(`Senha digitada: ${senha_digitada}`)
    if(senha === senha_correta){
        console.log('Senha digitada está correta!')
    }else{
        console.log('Senha digitada está incorreta!')
    }


}

main()