const input = [
  "1.20 2.30 10.00 15.00",
  "1.00 1.00 9.00 9.01",
  "1.00 1.00 11.00 11.00",
];
const gets = () => [input[2]];

let lines = gets();

const [precoAlcool, precoGasolina, rendimentoAlcool, rendimentoGasolina] =
  lines[0].split(" ").map((x) => parseFloat(x));

const precoPorKmAlcool = precoAlcool / rendimentoAlcool;
const precoPorKmGasolina = precoGasolina / rendimentoGasolina;

const maisEconomico = precoPorKmGasolina <= precoPorKmAlcool ? "G" : "A";

console.log(maisEconomico);

var x = 0;
