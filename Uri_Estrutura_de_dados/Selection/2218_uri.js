function troca(vetor, pos1, pos2) {
    console.log(`${vetor[pos1]} => ${vetor[pos2]}`);
    [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];
    return vetor;
  }
  function selectionSort(item, cont) {
    let menor = 0;
    for (let i = 0; i < cont - 1; i++) {
      menor = i;
      for (let j = i + 1; j < item.length; j++) {
        if (item[j] < item[menor]) {
          menor = j;
        }
      }
      if (i != menor) {
        troca(item, i, menor);
      }
    }
    console.log(`${item.join(" ")}`);
    return item;
  }

let input = require("fs").readFileSync("stdin", "utf8").split("\n");
let cont = input.shift();
let array = input.shift().split(" ").map(Number);
selectionSort(array, cont)