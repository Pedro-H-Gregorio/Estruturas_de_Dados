// Documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

class Pilha {

  constructor() {
    this.lista = new Array()
  }

  push(e) {
    return this.lista[this.lista.length]=e
  }

  pop() {
    let value = this.isEmpty()? null : this.lista[this.lista.length - 1]
    this.lista.splice(this.lista.length - 1,1)
    return value
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
