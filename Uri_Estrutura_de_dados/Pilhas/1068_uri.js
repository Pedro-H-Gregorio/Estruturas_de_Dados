class Pilha {

    constructor() {
      this.lista = new Array()
    }
  
    push(e) {
      return this.lista[this.lista.length]=e
    }
  
    pop() {
      let valor = this.isEmpty()? null : this.lista[this.lista.length - 1]
      this.lista.splice(this.lista.length - 1,1)
      return valor
    }
  
    size() {
      return this.lista.length;
    }
  
    isEmpty() {
      return this.lista.length == 0 ? true : false ;
    }
  
    top() {
      return this.isEmpty() ? null : this.lista[this.lista.length - 1]
    }
  }
  
var input = require('fs').readFileSync('stdin', 'utf8').split("\n");
function procurar (array, n) {
    let cont;
    for (let i in array){
        let j = parseInt(i)
       switch( array.substr(j,1)){
           case n : {
               cont = j
               array - n
           }
           break
       }
    }
    return cont
}

for (let expressao of input){
    let exp = expressao.trim()
    let pilha = new Pilha()
    let valores = "";
    console.log("pedro" - "p")
    for (let caracter of exp){
        if ((caracter == '(') || caracter == ')'){
            valores += caracter
        }
    }
    if((valores.substring(0,1)==")") || (valores.substr(valores.length-1,1)=="(")){console.log("incorrect")}
    else
    {
        for(let aspas of valores){
            pilha.push(aspas)
            if((pilha.top()=="(") && (procurar(valores,")")!="nao achado")){
                let palavra = pilha.pop() + valores.slice(procurar(valores,")"),procurar(valores,")")+1)
            }if(palavra == '()'){

            }
        }
    }
}