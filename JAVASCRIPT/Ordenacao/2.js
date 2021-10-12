//              Ordenação e Filtros em JavaScript

// Compras no Supermercado

// Pedro trabalha sempre até tarde todos os dias,
// com isso tem pouco tempo tempo para as tarefas
// domésticas. Para economizar tempo ele faz a lista
// de compras do supermercado em um aplicativo e costuma
// anotar cada item na mesma hora que percebe a falta
// dele em casa.

// O problema é que o aplicativo não exclui itens
// duplicados, como Pedro anota o mesmo item mais de 
// uma vez e a lista acaba ficando extensa. Sua tarefa
// é melhorar o aplicativo de notas desenvolvendo um 
// código que exclua os itens duplicados da lista de 
// compras e que os ordene alfabeticamente.

// Entrada
// A primeira linha de entrada contém um 
// inteiro N (N < 100) com a quantidade de 
// casos de teste que vem a seguir, ou melhor,
// a quantidade de listas de compras para organizar.
// Cada lista de compra consiste de uma única linha
// que contém de 1 a 1000 itens ou palavras compostas
// apenas de letras minúsculas (de 1 a 20 letras), 
// sem acentos e separadas por um espaço.

// Saída
// A saída contém N linhas, cada uma representando
// uma lista de compra, sem os itens repetidos e em
// ordem alfabética.

/* test

const out = [
    2,
    "carne laranja suco picles laranja picles",
    "laranja pera laranja pera pera"
];

let posicao = 0;

function gets(){
    return out[posicao++];
}
*/

const size = gets();

function getList(){
    const list = [];
    for (let c = 0; c < size; c++) {
        list.push(gets().split(" "));
    }
    return list;
}

function orderList(list){
    if(list != null){
        for (let c = 0; c < list.length; c++) {
            list[c].sort();
        }
        return list;
    }
    return null;
}

function deleteRepetition(list){
    const newlList = [];
    if(list != null){
        for (let c = 0; c < size; c++) {
            newlList.push([]);
            newlList[c].push(list[c][0]);
            for (let c2 = 1; c2 < list[c].length; c2++) {
                if(list[c][c2] != list[c][c2-1]) newlList[c].push(list[c][c2]);
            }
        }
        return newlList;
    }
    return null;
}

function printList(list){
    for (let c = 0; c < size; c++) {
        let itens = "";
        for (let c2 = 0; c2 < list[c].length; c2++) {
            itens = itens + " " + list[c][c2];
        }
        console.log(itens);
    }
}


const listItens = deleteRepetition(orderList(getList()));
printList(listItens);