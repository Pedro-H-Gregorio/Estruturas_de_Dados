function troca(vetor, pos1, pos2) {
  console.log(`${vetor[pos1]} => ${vetor[pos2]}`);
  [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];
  return vetor;
}
function selectionSort(item) {
  let menor = 0;
  let it = 0;
  console.log(`Entrada inicial: [${item}]`);
  for (let i = 0; i < item.length - 1; i++) {
    menor = i;
    it++;
    for (let j = i + 1; j < item.length; j++) {
      if (item[j] < item[menor]) {
        menor = j;
      }
    }
    if (i != menor) {
      troca(item, i, menor);
    }
    console.log(`Após ${it}ª Iteração: [${item}]`);
  }
  console.log(`Resultado final: [${item}]`);
  return item;
}

let a = [25, 14, 26, 19, 7, 28];
selectionSort(a);
