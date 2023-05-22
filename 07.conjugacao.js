import { question } from "readline-sync";

function main(){
    const verbo = question('Digite um verbo no infinitivo terminado em ER: ')

    const verb = verbo.split('er')
    //eu
    const verbo_eu = verb[0] + 'o'
    console.log(`Eu ${verbo_eu}`)
    //tu
    const verbo_tu = verb[0] + 'es'
    console.log(`Tu ${verbo_tu}`)
    //ele
    const verbo_ele = verb[0] + 'e'
    console.log(`Ele ${verbo_ele}`)
    //nós
    const verbo_nos = verb[0] + 'emos'
    console.log(`Nós ${verbo_nos}`)
    //vós
    const verbo_vos = verb[0] + 'eis'
    console.log(`Vós ${verbo_vos}`)
    //eles
    const verbo_eles = verb[0] + 'em'
    console.log(`Eles ${verbo_eles}`)
}

main()