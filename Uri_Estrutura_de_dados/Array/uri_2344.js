var input = parseInt(require('fs').readFileSync('stdin', 'utf8'))
let notas = new Array (101)
for (let i =0; i< notas.length; i++){
 notas[i] = (i>=1&&i<=35)?"D":(i>=36&&i<=60)?"C":(i>=61&&i<=85)?"B":(i>=86&&i<=100)?"A":"E"
}
console.log(notas[input])