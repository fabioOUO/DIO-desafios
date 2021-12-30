const input = ["6 9", "8 8", "5 91"];

const gets = () => input[2];

const evenNumber = (num) => num % 2 == 0;
const printter = (message) => console.log(message);

// descomentar isso para o dio
// let lines = gets().split("\n");

// comentar isso
const lines = gets().split(" ");

const [l, c] = [parseInt(lines[0]), parseInt(lines[1])];

evenNumber(l)
  ? evenNumber(c)
    ? printter(1)
    : printter(0)
  : evenNumber(c)
  ? printter(0)
  : printter(1);
