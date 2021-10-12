const input1 = ["1", "2", "OSADOISAJDSAOIDJA", "ASOIJDOSAJDASOIDJA"];
const input2 = ["1", "2", "CBA", "DDD"];
const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
let position = 0;
const gets = () => input1[position++];

const calcValue = (position, element, positionElement) => {
  return position + element + positionElement;
};

const getPositionChar = (char) => {
  return alphabet.indexOf(char);
};

const sumHash = (...rest) => {
  return rest.reduce((acc, item) => acc + item, 0);
};

const getElements = () => {
  let elements = [];
  const sizeElemnet = parseInt(gets());

  for (let c2 = 0; c2 < sizeElemnet; c2++) {
    elements.push(String(gets()));
  }
  return elements;
};

const N = parseInt(gets());

for (let c = 0; c < N; c++) {
  const elements = getElements();
  let sum = [];

  for (let c1 = 0; c1 < elements.length; c1++) {
    for (let c2 = 0; c2 < elements[c1].length; c2++) {
      const position = getPositionChar(elements[c1][c2]);
      sum.push(parseInt(calcValue(position, c1, c2)));
    }
  }
  console.log(sumHash(...sum));
}
