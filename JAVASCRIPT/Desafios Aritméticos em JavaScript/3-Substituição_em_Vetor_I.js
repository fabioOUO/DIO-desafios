// const input = [
//   "-78945",
//   "-260",
//   "6",
//   "-5",
//   "-294",
//   "950",
//   "-50000",
//   "-30645",
//   "0",
//   "-583",
// ];

// let p = -1;

// const gets = () => {
//   p++;
//   return input[p];
// };

let n = undefined;

for (let i = 0; i < 10; i++) {
  n = gets();
  console.log(`X[${i}] = ${n <= 0 ? 1 : n}`);
}
