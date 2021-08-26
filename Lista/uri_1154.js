var input = require('fs').readFileSync('stdin', 'utf8').split('\n').map(Number)
let lista = new Array ()
for (let i of input){
    if (i>=0){
        lista.push(i)
    }
}
lista.pop()
let cont = 0
for ( let i of lista){
    cont+=i
}
console.log((cont/lista.length).toFixed(2))