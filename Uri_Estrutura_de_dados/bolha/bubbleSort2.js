function troca(vetor, pos1, pos2) {
  console.log(
    `${vetor[pos1]}, ${vetor[pos2]} => ${vetor[pos2]}, ${vetor[pos1]}`
  ); // Imprimir
  let aux = vetor[pos1];
  vetor[pos1] = vetor[pos2];
  vetor[pos2] = aux;
  return vetor;
}
function bubbleSort2(items) {
  let it = 0; // Imprimir
  console.log(`Entrada inicial: [${items}]`); // Imprimir
  for (let last = items.length - 1; last > 0; last--) {
    it++; // Imprimir
    console.log(`Iniciando ${it}ª Iteração...`); // Imprimir
    for (let i = 0; i < last; i++) {
      if (items[i] > items[i + 1]) {
        troca(items, i, i + 1);
      }
    }
    console.log(`Após ${it}ª Iteração: [${items}]`); // Imprimir
  }
  console.log(`Resultado final: [${items}]`); // Imprimir
  return items;
}
