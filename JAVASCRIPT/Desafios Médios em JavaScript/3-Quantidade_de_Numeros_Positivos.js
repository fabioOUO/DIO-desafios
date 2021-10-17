const input = ["7", "-5", "6", "-3.4", "4.6", "12"];

let p = 0;
const gets = () => input[p++];

let quantidadePositivos = 0;

for (let i = 0; i < 6; i++) {
  const valorInformadoPeloUsuario = gets();

  // TODO Incrementar a "quantidadePositivos" somente SE o "valorInformadoPeloUsuario" for positivo.
  if (valorInformadoPeloUsuario > 0) {
    quantidadePositivos++;
  }
}

console.log(`${quantidadePositivos} valores positivos`);
