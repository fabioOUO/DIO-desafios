// const input = "6.0 4.0 2.0";
// const gets = () => input;

//-------------------------------

const line = gets().split(" ");
const check = (n1, n2, n3) => n1 < n2 + n3;
const message = (text) => console.log(text);
const perimeter = (l1, l2, l3) => l1 + l2 + l3;
const area = (b1, b2, h) => ((b1 + b2) / 2) * h;
const decimalPlaces = (n) => (typeof n == "number" ? n.toFixed(1) : 0);

const [A, B, C] = [
  parseFloat(line[0]),
  parseFloat(line[1]),
  parseFloat(line[2]),
];

const triangulo = check(A, B, C) || check(A, B, C) || check(A, B, C);

triangulo
  ? message(`Perimetro = ${decimalPlaces(perimeter(A, B, C))}`)
  : message(`Area = ${decimalPlaces(area(A, B, C))}`);
