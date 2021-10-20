// Documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

class Fila {
  constructor() {
    this.lista = new Array();
  }

  enqueue(e) {
    return (this.lista[this.lista.length] = e);
  }

  dequeue() {
    let value;
    this.isEmpty()
      ? (value = null)
      : this.lista.forEach((element, index) => {
          if (index === 0) {
            value = element;
            this.lista.splice(0, 1);
          }
        });
    return value;
  }

  size() {
    return this.lista.length;
  }

  isEmpty() {
    return this.lista.length == 0 ? true : false;
  }

  front() {
    return this.isEmpty() ? null : this.lista[0];
  }
}

module.exports = Fila;

let fila = new Fila();
console.log(fila.isEmpty());
fila.enqueue(1);
fila.enqueue(2);
fila.enqueue(3);
fila.enqueue(4);
console.log(fila.front());
console.log(fila.lista);
fila.dequeue();
console.log(fila.lista);
console.log(fila.front());
fila.dequeue();
fila.dequeue();
console.log(fila.lista);
console.log(fila.front());
console.log(fila.isEmpty());
