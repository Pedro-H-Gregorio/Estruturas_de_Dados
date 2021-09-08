var input = require('fs').readFileSync('stdin', 'utf8').split('\n').map(Number)
let cont= 0
let indice=0
let numeros= new Array(input.length)
for (let i=0;i<numeros.length;i++){
    numeros[i]=input.shift()
    cont = (numeros[i]>=cont)?numeros[i]:cont
    indice = (cont==numeros[i])?i+1:indice
}
console.log(cont)
console.log(indice)