//              Ordenação e Filtros em JavaScript

// Uniformes de final de ano

// O professor Girafales organizou a
// confecção de um uniforme para as 
// turmas da escola para comemorar o 
// final do ano. Após algumas conversas,
// ficou decidido com os alunos que eles
// poderiam escolher a cor do uniforme entre
// branco ou vermelho. Assim sendo, Girafales
// precisa de sua ajuda para organizar as listas
// de quem quer o uniforme em cada uma das turmas,
// relacionando estas camisetas pela cor,
// tamanho (P, M ou G) e por último pelo nome.

// Entrada
// Cada caso de teste inicia com um valor N,
// (1 ≤ N ≤ 60) inteiro e positivo, que indica 
// a quantidade de uniformes a serem feitas para
// aquela turma. As próximas N*2 linhas contém
// informações de cada um dos uniformes 
// (serão duas linhas de informação para cada uniforme).
// A primeira linha irá conter o nome do estudante
// e a segunda linha irá conter a cor do uniforme
// ("branco" ou "vermelho") seguido por um espaço
// e pelo tamanho do uniforme "P" "M" ou "G".
// A entrada termina quando o valor de N for igual a zero (0)
// e esta valor não deverá ser processado.

// Saída
// Para cada caso de entrada deverão ser impressas as
// informações ordenadas pela cor em ordem ascendente,
// seguido pelos tamanhos em ordem descendente e por último
// por ordem ascendente de nome, conforme o exemplo abaixo.

/*
test
const out = [9,
    "Maria Jose",
    "branco P",
    "Mangojata Mancuda",
    "vermelho P",
    "Cezar Torres Mo",
    "branco P",
    "Baka Lhau",
    "vermelho P",
    "JuJu Mentina",
    "branco M",
    "Amaro Dinha",
    "vermelho P",
    "Adabi Finho",
    "branco G",
    "Severina Rigudinha",
    "branco G",
    "Carlos Chade Losna",
    "vermelho P",
    0
];

let posicao = 0;

function gets(){
    return out[posicao++];
}
*/
function getList(){
    const list = [];
    let student = null;
    let uniform = null;
    while(true){
        student = gets();
        if(student == 0) return list;
        uniform = gets().split(" ");
        if(uniform == 0) return list;
        list.push([uniform[0],uniform[1],student]);
    }
}

function noRepetition(list){
    const newList = [];
    let p = 1;
    if(list[0] != null) newList.push(list[0]);
    while(list[p] != null){
        if(list[p] != list[p-1]) newList.push(list[p]);
        p++;
    }
    return newList;
}

function getElementNames(list, positionItem){
    if(positionItem >= 0){
        return noRepetition(list.map((item)=>{return item[positionItem]}).sort());
    }
    return null;
}

function printInformations(list){
    for (let c = 0; c < list.length; c++) {
        console.log(list[c][0], list[c][1], list[c][2]);
    }
}

const quantity = gets();
const list = getList();

const itens0 =  getElementNames(list, 0);
const itens1 =  getElementNames(list, 1);

const listBranco = list.filter((item)=>{ return item[0] == itens0[0]});
const listVermelho = list.filter((item)=>{ return item[0] == itens0[1]});

const listBrancoG = listBranco.filter((item)=>{ return item[1] == itens1[0]});
const listBrancoM = listBranco.filter((item)=>{ return item[1] == itens1[1]});
const listBrancoP = listBranco.filter((item)=>{ return item[1] == itens1[2]});

const listVermelhoG = listVermelho.filter((item)=>{ return item[1] == itens1[0]});
const listVermelhoM = listVermelho.filter((item)=>{ return item[1] == itens1[1]});
const listVermelhoP = listVermelho.filter((item)=>{ return item[1] == itens1[2]});

printInformations(listBrancoP.sort());
printInformations(listBrancoM.sort());
printInformations(listBrancoG.sort());

printInformations(listVermelhoP.sort());
printInformations(listVermelhoM.sort());
printInformations(listVermelhoG.sort());