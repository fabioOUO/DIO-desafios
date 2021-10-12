//              Ordenação e Filtros em JavaScript

// Ordenando Números Pares e Ímpares

// Crie um programa onde você receberá valores
// inteiros não negativos como entrada.

// Ordene estes valores de acordo com o seguinte critério:

// Primeiro os Pares
// Depois os Ímpares
// Você deve exibir os pares em ordem crescente e
// na sequência os ímpares em ordem decrescente.

// Entrada
// A primeira linha de entrada contém um único inteiro
// positivo N (1 < N < 10000) Este é o número de linhas
// de entrada que vem logo a seguir. As próximas N linhas
// terão, cada uma delas, um valor inteiro não negativo.

/*
test

const out = [10,4,32,34,543,3456,654,567,87,6789,98];
let posicao = 0;

function gets(){
    return out[posicao++];
}
*/

const size = gets();

function getNumbers(){
    const numbersPar = [];
    const numbersImpar = [];
    for(let c =0; c < size; c++){
        let num = gets();
        if(num % 2 == 0){
            numbersPar.push(num);
        }else{
            numbersImpar.push(num);
        }
    }
    return [numbersPar,numbersImpar];
}

function order(numbersList, op){
    numbersList.sort((a,b)=>{
        if(op == 1){
            return a-b;
        }else if(op == -1){
            return b-a;
        }else{
            return -1;
        }
    });
    return numbersList;
}

function printList(list){
    for (let c = 0; c < list.length; c++) {
        console.log(list[c]);
    }
}

const listNumbers =  getNumbers();
const listNumbersPar =  listNumbers[0];
const listNumbersInpar =  listNumbers[1];
const listParOrder = order(listNumbersPar, 1);
const listImparOrder = order(listNumbersInpar, -1);

printList(listParOrder);
printList(listImparOrder);