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

for (let expressao of input){
  let exp = expressao.trim()
  let pilha = new Pilha()
  let aspas = ""

  for (let caracter of exp){
    aspas += caracter == "(" || caracter == ")"? caracter : ""
    let value = false
    if ((caracter == '(')){
        pilha.push(caracter)
    }
    else if((caracter == ")") && (pilha.top() == '(') && (pilha.isEmpty()!= true)){
      pilha.pop()
      value = true
    } else if (caracter == ")" && value == false){
      pilha.push(caracter)
    }
  }
  if(aspas.length > 0){
  console.log((pilha.isEmpty())? "correct": "incorrect")
  }
}