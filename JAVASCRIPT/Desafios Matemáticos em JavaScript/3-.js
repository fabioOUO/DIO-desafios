const input = ["-3.5", "3.5", "11.0", "10.0", "4", "1", "8.0", "9.0", "2"];
let p = 0;
const gets = () => {
  return input[p++];
};

const returnMedia = () => {
  let numberA;
  let numberB;

  let temp = gets();

  while (temp > 10 || temp < 0) {
    console.log("nota invalida");
    temp = gets();
  }
  numberA = parseFloat(temp);

  temp = gets();

  while (temp > 10 || temp < 0) {
    console.log("nota invalida");
    temp = gets();
  }

  numberB = parseFloat(temp);

  let media = ((numberA + numberB) / 2).toFixed(2);
  console.log(`media = ${media}`);
  console.log(`novo calculo (1-sim 2-nao)`);
};

let res;
let stop = false;
returnMedia();

do {
  res = parseInt(gets());
  switch (res) {
    case 1:
      returnMedia();
      continue;
    case 2:
      stop = true;
      break;
    default:
      console.log(`novo calculo (1-sim 2-nao)`);
      continue;
  }
} while (!stop);
