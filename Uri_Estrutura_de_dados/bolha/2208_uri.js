function troca(vetor, pos1, pos2) {
  console.log(`${vetor[pos1]} => ${vetor[pos2]}`);
  [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];
  return vetor;
}

function bubbleSort3(items, contador) {
  let it = 0;
  let swap;
  let last = contador - 1;
  do {
    it++;
    swap = false;
    for (let i = 0; i < last; i++) {
      if (items[i] > items[i + 1]) {
        troca(items, i, i + 1);
        swap = true;
      }
    }
  } while (swap);
  console.log(`${items.join(" ")}`);
  return items;
}
let input = require("fs").readFileSync("stdin", "utf8").split("\n");
let cont = input.shift();
let array = input.shift().split(" ").map(Number);
bubbleSort3(array, cont);
