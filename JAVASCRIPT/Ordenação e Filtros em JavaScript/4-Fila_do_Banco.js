//              Ordenação e Filtros em JavaScript

//  Fila do Banco

// O banco que você trabalha sempre
// tem problemas para organizar as
// filas de atendimento dos clientes.

// Após uma reunião com a gerência
// ficou decidido que os clientes
// ao chegar na agência receberão
// uma senha numérica em seu aparelho
// de celular via sms e que a ordem
// da fila será dada não pela ordem
// de chegada, mas sim pelo número
// recebido via sms. A ordem de
// atendimento será decrescente:
// aqueles que receberam número
// maior deverão ser atendidos primeiro. 

// Então, dada a ordem de chegada dos
// clientes reordene a fila de acordo
// com o número recebido via sms, e diga
// quantos clientes não precisaram trocar
// de lugar nessa reordenação.

// Entrada
// A primeira linha contém um inteiro N,
// indicando o número de casos de teste a seguir.

// Cada caso de teste inicia com um inteiro M (1 ≤ M ≤ 1000),
// indicando o número de clientes. Em seguida haverá M inteiros
// distintos Pi (1 ≤ Pi ≤ 1000), onde o i-ésimo inteiro indica
// o número recebido via sms do i-ésimo cliente.

// Os inteiros acima são dados em ordem de chegada, ou seja,
// o primeiro inteiro diz respeito ao primeiro cliente a
// chegar na fila, o segundo inteiro diz respeito ao segundo
// cliente, e assim sucessivamente.

// Saída
// Para cada caso de teste imprima uma linha, contendo um inteiro,
// indicando o número de clientes que não precisaram trocar de
// lugar mesmo após a fila ser reordenada.

/* test
const out = [
    3,
    3,
    "100 80 90",
    4,
    "100 120 30 50",
    4,
    "100 90 30 25"
];

let posicao = 0;

function gets(){
    return out[posicao++];
}
*/

const quantity = gets();
const quantityForList = [];

function getListClients(){
    const list = [];

    for (let c = 0; c < quantity; c++) {
        quantityForList.push(gets());
        list.push(gets().split(" "));
        for (let c2 = 0; c2 < quantityForList[c]; c2++) {
            list[c][c2] = Number(list[c][c2]);      
        }
    }
    return list;
}

function copyList(list){
    const newList = [];
    for (let c = 0; c < list.length; c++) {
        newList.push([]);
        for (let c2 = 0; c2 < quantityForList[c]; c2++) {
            newList[c].push(list[c][c2]);
        }
    }
    return newList;
}

function orderClientes(listClients){
    const newList = copyList(listClients);
    for (let c = 0; c < quantity; c++) {
        newList[c].sort((a,b)=>{return b - a});
    }
    return newList;
}

function compare(list1, list2){
    const newList = [];
    for (let c = 0; c < quantity; c++) {
        newList.push(0);
        for (let c2 = 0; c2 < quantityForList[c]; c2++) {
            if(list1[c][c2] === list2[c][c2]){
                newList[c] += 1;
            }
        }
    }
    return newList;
}

function printQuantityLists(result){
    for (let index = 0; index < result.length; index++) {
        console.log(result[index]);
    }
}

const list = getListClients();
const listClients = orderClientes(list);
const result = compare(list, listClients);
printQuantityLists(result);