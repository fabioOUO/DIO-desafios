// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

const gets = () => 5;

let N = parseInt(gets());

for (let numero = 1; numero <= N; numero++) {
  let [quadrado, cubo] = [Math.pow(numero, 2), Math.pow(numero, 3)];
  console.log(`${numero} ${quadrado} ${cubo}`);
}
