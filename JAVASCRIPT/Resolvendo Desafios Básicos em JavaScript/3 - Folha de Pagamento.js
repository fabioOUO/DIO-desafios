const input = ["25", "100", "5.50"];
let p = 0;
const gets = () => (p < input.length ? input[p++] : undefined);

const [num, quant, value] = [
  parseInt(gets()),
  parseInt(gets()),
  parseFloat(gets()),
];

const total = (quant * value).toFixed(2);

console.log("NUMBER = ", num, "\nSALARY = U$ ", total);
