var input = require('fs').readFileSync('stdin', 'utf8')
var lines= input.split("\n")
let valor = lines.shift()
let alfabeto= new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z')
for (let i =0; i<alfabeto.length;i++){
    if (alfabeto[i]==valor)
    {
        console.log(i+1)   
    }  
}