const input = "4";
const gets = () => input;

//-------------------------------
const quant = (n) => (n * n - 3 * n) / 2;
const N = parseInt(gets());

if (N >= 3 && N <= 105) {
  console.log(quant(N));
}
