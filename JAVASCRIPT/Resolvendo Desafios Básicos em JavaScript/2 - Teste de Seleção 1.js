const input = ["5 6 7 8", "2 3 2 6"];
const gets = () => input[1];

x = gets().split(" ");
[a, b, c, d] = [parseInt(x[0]), parseInt(x[1]), parseInt(x[2]), parseInt(x[3])];

const check1 = () => b > c;
const check2 = () => d > a;
const check3 = () => c + d > a + b;
const check4 = () => c > 0 && d > 0;
const check5 = () => a % 2 == 0;

const check = () => check1() && check2() && check3() && check4() && check5();

check() ? console.log("Valores aceitos") : console.log("Valores nao aceitos");
