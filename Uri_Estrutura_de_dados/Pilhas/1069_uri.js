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
let cont = parseInt(input.shift())

for (let i = 0; i < cont ; i++){
  let pilha = new Pilha()
  let valores = input.shift().trim()
  let diamantes = 0

  for (let j of valores){
    if (j == "<"){
      pilha.push(j)
    }else if ((j == ">") && (pilha.isEmpty() != true)) {
      pilha.pop()
      diamantes++
    }
  }
  console.log(diamantes)
}