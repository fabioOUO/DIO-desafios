// const gets = () => {
//   return 1;
// };

const n = gets();

const vector = (num) => {
  const vector = [];
  for (let c = 0; c < 10; c++) {
    vector.push(num);
    num *= 2;
  }
  return vector;
};

for (let c = 0; c < 10; c++) {
  console.log("N[" + c + "] = " + vector(n)[c]);
}
