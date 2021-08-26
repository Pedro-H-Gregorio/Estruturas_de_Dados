var input = parseInt(require('fs').readFileSync('stdin', 'utf8'))
let resultados= new Array()
let k = 2
for (let i=0;i<(input%2==0?(input/2):(input/2)-1);i++){
    resultados[i]= k**2
    k+=2
}
let c= 2
for (j in resultados){
    console.log(`${c}^2 = ${resultados[j]}`)
    c+=2
}