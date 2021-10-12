// Exemplo DIO
const input = ["3", "3 -2", "-8 0", "0 8"];

let position = 0;
const gets = () => input[position++];

// Implementação desafio

let limit = parseInt(gets());

for (let i = 0; i < limit; i++) {
  let line = gets().split(" ");
  let [X, Y] = [parseInt(line[0]), parseInt(line[1])];

  if (Y == 0) {
    console.log("divisao impossivel");
  } else {
    let divisao = parseFloat(X / Y).toFixed(1); //complete com o sinal da operação faltante entre x e y
    console.log(divisao);
  }
}
