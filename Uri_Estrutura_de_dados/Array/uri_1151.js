var cont = parseInt(require('fs').readFileSync('stdin', 'utf8'))
let valores= new Array()
valores[0]=0
valores[1]=1
for(let i=2;i<cont;i++){
    valores[i]=valores[i-2]+valores[i-1]
}
console.log(valores.map(String).reduce((acu,c)=>acu+" "+c))