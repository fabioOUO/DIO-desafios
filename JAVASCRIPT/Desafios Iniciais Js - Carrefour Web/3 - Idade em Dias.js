// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

const gets = () => 30;

let entrada = parseInt(gets());

let anos = parseInt(entrada / 365);
entrada = entrada % 365;

let meses = parseInt(entrada / 30);
entrada = entrada % 30;

let dias = entrada;

let resultado =
  anos + " ano(s) " + "\n" + meses + " mes(es)" + "\n" + dias + " dia(s)";

console.log(resultado);
