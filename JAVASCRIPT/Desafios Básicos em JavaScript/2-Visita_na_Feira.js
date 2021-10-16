// Exemplo DIO
const input = ["11 -2"];
let p = 0;
const gets = () => input[p++];

// Implementação desafio
let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);

let X = A + B; // Altere o valor da variável com o cálculo esperado
console.log("X = " + X);
