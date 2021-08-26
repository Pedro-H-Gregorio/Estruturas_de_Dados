/*var input = require('fs').readFileSync('stdin', 'utf8').split('\n')
// variaveis de preparação
let cont= parseInt(input.shift())
let coelho= new Array()
let sapo= new Array()
let rato= new Array()
let ic=0
let is=0
let ir=0
// definição de valores para cada um dos arrays
for(let i=0;i<cont;i++){
    let dados= input.shift().split('\r')
    let valores= dados[0].split(' ')
    if (valores[1]=='C'){
        coelho[ic]=parseInt(valores[0])
        ic++
    }else if(valores[1]=='S'){
        sapo[is]=parseInt(valores[0])
        is++
    }else{
        rato[ir]=parseInt(valores[0])
        ir++
    }
}
//operações de soma dos array
let total= new Array(coelho.reduce((acu,c)=>acu+c,0),sapo.reduce((acu,c)=>acu+c,0),rato.reduce((acu,c)=>acu+c,0))
let totaldeanimais= total.reduce((acu,c)=>acu+c,0)
// porcentagens
let porcentagem=new Array((total[0]*100)/totaldeanimais,(total[1]*100)/totaldeanimais,(total[2]*100)/totaldeanimais)
// impressão dos resultados
console.log(`Total: ${totaldeanimais} cobaias
Total de coelhos: ${total[0]}
Total de ratos: ${total[2]}
Total de sapos: ${total[1]}
Percentual de coelhos: ${porcentagem[0].toFixed(2)} %
Percentual de ratos: ${porcentagem[2].toFixed(2)} %
Percentual de sapos: ${porcentagem[1].toFixed(2)} %`)

/*
var input = require('fs').readFileSync('stdin', 'utf8').split('\n')
// variaveis de preparação
let cont= parseInt(input.shift())
let cobaias= new Array(3)
for(let i =0; i<cobaias.length;i++){cobaias[i]=0}
let cont=parseInt(input.shift())
for(let i=0;i<cont;i++){
    let dados= input.shift().split(' ');dados[1].trim()
    (dados[1]=='C')?cobaias[0]+=parseInt(dados[0]):(dados[1]=='S')?cobaias[1]+=parseInt(dados[0]):cobaias[2]+=parseInt(dados[0])
}
console.log(cobaias)
*/

var input = require('fs').readFileSync('stdin', 'utf8').split('\n')
// variaveis de preparação   [0]- Coelho [1]- Sapo [2]- Rato
let cont= parseInt(input.shift())
let animais= new Array(0,0,0)
// definição de valores para cada um dos arrays
for(let i=0;i<cont;i++){
    let dados= input.shift().split('\r')
    let valores= dados[0].split(' ')
    if (valores[1]=='C'){
        animais[0]+=parseInt(valores[0])
    }else if(valores[1]=='S'){
        animais[1]+=parseInt(valores[0])
    }else{
        animais[2]+=parseInt(valores[0])
    }
}
//operações de soma dos array
let totaldeanimais= animais.reduce((acu,c)=>acu+c,0)
// porcentagens
let porcentagem=new Array((animais[0]*100)/totaldeanimais,(animais[1]*100)/totaldeanimais,(animais[2]*100)/totaldeanimais)
// impressão dos resultados
console.log(`Total: ${totaldeanimais} cobaias
Total de coelhos: ${animais[0]}
Total de ratos: ${animais[2]}
Total de sapos: ${animais[1]}
Percentual de coelhos: ${porcentagem[0].toFixed(2)} %
Percentual de ratos: ${porcentagem[2].toFixed(2)} %
Percentual de sapos: ${porcentagem[1].toFixed(2)} %`)