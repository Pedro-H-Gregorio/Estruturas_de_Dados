var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let valor= parseInt(lines.shift())
let resultados= new Array(9)
for(var i=0;i<=9;i++){
    resultados[i]=valor*(i+1)
    console.log(`${i+1} x ${valor} = ${resultados[i]}`)
}