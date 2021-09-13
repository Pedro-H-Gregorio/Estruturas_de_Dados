// Documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

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

module.exports = Pilha;

let lista = new Pilha ()
console.log(lista.lista.length)
lista.pop()
console.log(lista.pop())