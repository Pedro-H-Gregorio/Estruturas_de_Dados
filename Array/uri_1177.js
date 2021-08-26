var input = parseInt(require('fs').readFileSync('stdin', 'utf8'))
var valor = parseInt(input)
let array= new Array(1000)
let k = 0
for (let i =0 ; i<array.length; i++){
    array[i]=k
    k=(k<input-1)?++k:0
}
for (let j = 0; j<array.length;j++){
    console.log(`N[${j}] = ${array[j]}`)
}