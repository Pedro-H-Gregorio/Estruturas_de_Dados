var input = require('fs').readFileSync('stdin', 'utf8').split("\n");
let cont = parseFloat(input.shift())
let media = (a,index) => parseFloat((((index=="0")?(a*2):(index=="1")?(a*3):(a*5))/10).toFixed(2))

for (let i = 0; i<cont; i++ ){

    let elementos=input.shift().split(" ").map(Number)
    let lista=new Array()

    for(let j in elementos){

        lista.push(media(elementos[j],j))

        }

    console.log(lista.reduce((acu,c)=>acu+c,0).toFixed(1))

}