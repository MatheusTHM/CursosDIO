//Antes do ES6
function sum(a,b) {
    //console.log(arguments);    // Arguments = Lista contendo todos os elementos
    var value = 0;
    for (let i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }
    
    return value;
}

//console.log(sum(5, 5, 5, 2, 3));



//Com ES6
// REST OPERATOR ...

function soma(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}

//console.log(soma(5, 5, 5, 2, 3));


const soma2 = (a, b, ...rest) => {      // arrow functions precisam do ...rest para trabalhar com arguments
    console.log(a, b, rest);
}

//console.log(soma2(5, 5, 5, 2, 3));



// SPREAD OPERATOR ...
//pode ser usado em strings, array, objetos literais e objetos iteraveis
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const soma3 = (...rest) => {
    return multiply(...rest);        // Nesse caso o SPREAD passa todos os items de um array como parametros para essa função
};

//console.log(soma3(5, 5, 5, 2, 3));

//Spread com String
const str = 'Desenvolvimento com ES6';
const arr = [1, 2, 3, 4];

function logArgs(...args) {
    console.log(args);
}

//const arr2 = arr.concat([5, 6, 7]);
const arr2 = [5, ...arr,  6, 7];        //Usar spread na criação de arrays

const arr3 = [0, ...arr2, ...arr, 0];

const arrClone = [...arr];

//logArgs(arrClone);


//Spread com Objetos literais
const obj = {
    test: 123,
    subObj: {
        test: 123
    }
};

const obj2 = {
    ...obj,
    subObj: {
        ...obj.suObj        //Fazendo clones de subObjetos com spread para não ocorrer erros com os objetos originais
    },
    test2: 'hello',
    test: 0             //sobrescrevendo o primeiro objeto 
};

const objMerged = {
    ...obj2,
    ...obj
};

console.log(objMerged);