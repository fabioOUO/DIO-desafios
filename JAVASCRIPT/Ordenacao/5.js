//Código do desafio:
const inputs = [
  //para uso local
  "3",
  "Fernanda 7",
  "Fernando 9",
  "Gustavo 11",
  "5",
  "Maria 7",
  "Pedro 9",
  "Joao_Vitor 5",
  "Isabel 12",
  "Laura 8",
  "3",
  "Maria 4",
  "Pedro 3",
  "Joao 2",
  "0",
];

const inputs2 = [
  5,
  "Maria 5",
  "Pedro 2",
  "Joao 5",
  "Isabel 12",
  "Luana 8",
  5,
  "Maria 7",
  "Pedro 9",
  "Joao_Vitor 5",
  "Isabel 12",
  "Laura 8",
  6,
  "Maria 5",
  "Kaio 4",
  "Pedro 8",
  "Joao 1",
  "Isabel 2",
  "Luana 10",
  5,
  "Maria 5",
  "Pedro 2",
  "Joao 5",
  "Isabel 2",
  "Luana 8",
  0,
];

let posicao = 0;

function gets() {
  return inputs2[posicao++];
}

// colocar apenas daqui para baixo no DIO

while (true) {
  let nStudents = parseInt(gets());

  if (nStudents === 0) break;

  if (nStudents < 1 || nStudents > 100) {
    continue;
  }

  let students = [];
  let i = 0;

  while (i < nStudents) {
    let input = gets();

    let [name, value] = input.split(" ");
    i++;

    if (!name.match(/^[A-Za-z_]{1,30}$/) || !(1 <= value && value <= 500)) {
      // console.log(`Entrada do Aluno ${name} com valor ${value} é inválida.`)
      continue;
    }
    students = [...students, { name, value }];
  }

  let winner = whoIsChampion(students);
  console.log(`Vencedor(a): ${winner}`);
}

function whoIsChampion(group, index = 0, removed = {}) {
  if (group.length === 1) return group[0].name;

  let nextIndex = undefined;
  let studentNumber = parseInt(removed.value) || parseInt(group[index].value);

  studentNumber % 2 === 0 ? (studentNumber *= -1) : (studentNumber *= 1);

  const indexToRemove = crawlArray(group, index, studentNumber);

  [removed] = group.splice(indexToRemove, 1);

  if (removed.value % 2 === 0) {
    nextIndex = indexToRemove > group.length - 1 ? 0 : indexToRemove;
  } else {
    nextIndex =
      indexToRemove > group.length - 1 ? group.length - 1 : indexToRemove - 1;
  }

  return whoIsChampion(group, nextIndex, removed);
}

function crawlArray(array, index, n) {
  return (((index + n) % array.length) + array.length) % array.length;
}
