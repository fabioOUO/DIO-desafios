// Exemplo DIO
const input1 = ["30"];
const input2 = ["110"];

let position = 0;
const gets = () => input2[position++];

// Implementação desafio

let quilometros = parseInt(gets());
let minutos = quilometros * 2; // Digite aqui o calculo dos minutos
console.log(minutos + " minutos");
