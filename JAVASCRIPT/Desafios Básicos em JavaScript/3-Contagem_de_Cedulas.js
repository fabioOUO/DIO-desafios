// Exemplo DIO
const input = ["576"];
let p = 0;
const gets = () => input[p++];

// Implementação desafio
let valor = parseInt(gets());

console.log(valor);
console.log(parseInt(valor / 100) + " nota(s) de R$ 100,00");
valor = valor % 100;
console.log(parseInt(valor / 50) + " nota(s) de R$ 50,00");
valor = valor % 50;
console.log(parseInt(valor / 20) + " nota(s) de R$ 20,00");
valor = valor % 20;
console.log(parseInt(valor / 10) + " nota(s) de R$ 10,00");
valor = valor % 10;
console.log(parseInt(valor / 5) + " nota(s) de R$ 5,00");
valor = valor % 5;
console.log(parseInt(valor / 2) + " nota(s) de R$ 2,00");
valor = valor % 2;
console.log(valor + " nota(s) de R$ 1,00");
