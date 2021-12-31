const input = "2 2 2 2";
const gets = () => input;

//-------------------------------

const T = gets().split(" ");
const quant = (t) =>
  parseInt(t[0]) + parseInt(t[1]) + parseInt(t[2]) + parseInt(t[3]) - 3;

console.log(quant(T));
