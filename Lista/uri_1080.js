var input = require('fs').readFileSync('stdin', 'utf8').split('\n').map(Number)
let cont= 0
let indice=0
let numeros= new Array()
for (let i=0;i<100;i++){
    numeros.push(input.shift())
    cont = (numeros[i]>cont)?numeros[i]:cont
    indice = (cont==numeros[i])?i+1:indice
}
console.log(cont)
console.log(indice)