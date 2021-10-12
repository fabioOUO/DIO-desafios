// Exemplo DIO
const input1 = ["1", "1", "1", "1", "1"];
const input2 = ["2", "2", "2", "2", "2"];

let position = 0;
const gets = () => input2[position++];

// Implementação desafio

let [chico, bento, bernardo, marina, iara, marlene] = [
  300 * parseInt(gets()),
  1500 * parseInt(gets()),
  600 * parseInt(gets()),
  1000 * parseInt(gets()),
  150 * parseInt(gets()),
  225,
];

let total = chico + bento + bernardo + marina + iara + marlene; // Digite aqui o calculo total

console.log(total);
