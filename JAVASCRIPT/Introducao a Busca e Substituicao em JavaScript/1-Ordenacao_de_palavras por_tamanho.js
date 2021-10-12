const input1 = [2, "midnight three four mond One at", "one three five"];
// const input1 = [1, "1 2 7 0 123 12 12345 1234"];
let posicao = 0;

function gets() {
  return input1[posicao++];
}

// de 1 a 50 palavras.
// cada palavra tem de 1 a 50 caracteres.

const size = gets();

function ordenar(palavras) {
  palavras
    .sort((a, b) => {
      if (a.length > b.length) {
        return true;
      } else {
        if (a.length === b.length) {
          if (a < b) {
            return 1;
          } else {
            return -1;
          }
        } else {
          return -1;
        }
      }
    })
    .reverse();
  return palavras;
}

function printResult(result) {
  let newPalavra = "";
  for (let c = 0; c < result.length; c++) {
    newPalavra += result[c] + " ";
  }
  console.log(newPalavra);
}

for (let c = 1; c <= size; c++) {
  const result = ordenar(gets().split(" "));
  printResult(result);
}
