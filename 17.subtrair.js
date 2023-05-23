import { question } from "readline-sync";

function main(){
    const texto = question('Digite o texto: ')
    const posicao = question('A partir de que posição: ')
    const qntd = question('Caracters: ')

    const substrair = extrair(texto, posicao,qntd)
    console.log(substrair)
}

function extrair(t,p,q){
    return t.substring(p,p+q)
}

main()