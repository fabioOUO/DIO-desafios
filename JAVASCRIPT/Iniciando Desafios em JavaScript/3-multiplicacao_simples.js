let posicao = 0;
const num = [9, 3];

const gets = () => num[posicao++];

let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let PROD = valor1 * valor2; // Altere o valor da variável com o cálculo esperado
console.log("PROD = " + PROD);
