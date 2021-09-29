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

    for (let caracter of exp){
        let valores;
        if ((caracter == '(') || caracter == ')'){
            valores = caracter
            pilha.push(valores)
        }
    }

    let resposta = "correct"

    if (pilha.size()%2==0){

        for (let i= 0; i<=(pilha.size()/2); i++){
            let aspas = pilha.pop()
            if (aspas=="(")(resposta = "incorrect")
        }

        for (let i= 0; i<=pilha.size();i++){
            let aspas = pilha.pop()
            if (aspas == ")")(resposta = "incorrect")
        }

    }else(resposta = "incorrect")
    console.log(resposta)
}