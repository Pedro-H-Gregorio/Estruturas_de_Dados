let mediaponderada = (a,index) => parseFloat((((index=="0")?(a*2):(index=="1")?(a*3):(a*5))/10).toFixed(2))
var input = require('fs').readFileSync('stdin', 'utf8').split('\n')
let cont= parseFloat(input.shift())
for(let i=0;i<cont;i++){
    let numeros= input.shift().split(' ').map(Number)
    let n = new Array(3)
        n[0]=numeros[0]
        n[1]=numeros[1]
        n[2]=numeros[2]
    let valor = 0
    for(let a in n) {
        valor+=mediaponderada(n[a],a)
    }
    console.log(valor.toFixed(1))
}
let media = (a,index) => parseFloat((((index=="0")?(a*2):(index=="1")?(a*3):(a*5))/10))
var input = require('fs').readFileSync('stdin', 'utf8').split('\n');input.shift()
input.forEach((numero) => console.log(([...(numero).split(' ').map(Number)].reduce((acu,c,index)=>acu+media(c,index),0)).toFixed(1)));
