//Método comum de gerar um objeto
var obj = {
    propriedade1: 'Valor1'
};
 var prop1 = "propriedade2";

 //Ou

 var obj1 = {
    propriedade1: prop1
};
//console.log(obj1);


//ES6

function method1() {
    console.log('Chamando método');
}

var nomePropriedade = 'teste';

var obj2 = {
    prop1,       //nome da propriedade e da variável são iguais
    method1,      //mesma situação para as funções
    soma(a, b) {
        console.log(a + b);
    },
    [nomePropriedade + 'concat']: 'valor da propriedade'
};

obj2.method1();
obj2.soma(1,2);
console.log(obj2.testeconcat);
//console.log(obj2);