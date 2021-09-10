// Documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array


class Fila {

  constructor() {
    this.lista = new Array();
  }

  enqueue(e) {
    // Adiciona um elemento na fila
    // TODO
  }

  dequeue() {
    // Retorna o elemento do começo da fila, removendo ele.
    // TODO
    return null;
  }

  size() {
    // Retorna a quantidade de elementos na fila
    // TODO
    return null;
  }

  isEmpty() {
    // Retorna um boleano indicando se a fila está vazia ou não
    // TODO
    return true;
  }

  front() {
    // Retorna o elemento do começo da fila, mas não remove.
    // TODO
    return null;
  }
}

module.exports = Fila;