const gets = () => "22 67";

const line = gets().split(" ");
const h = parseInt(line[0]);
const vm = parseInt(line[1]);

const litros = ((h * vm) / 12).toFixed(3);

console.log(" " + litros);
