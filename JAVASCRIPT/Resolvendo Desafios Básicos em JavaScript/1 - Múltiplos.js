const input = ["-6 -5\n"];

const gets = () => input;
const check = (a, b) => {
  [a, b] = [Math.abs(a), Math.abs(b)];
  return (b % a == 0 && a <= b) || (a % b == 0 && b <= a);
};
let lines = gets();
// let lines = gets().split("\n");

let line = lines.shift().split(" ");
let [A, B] = [parseInt(line[0]), parseInt(line[1])];

check(A, B) ? console.log("Sao Multiplos") : console.log("Nao sao Multiplos");
