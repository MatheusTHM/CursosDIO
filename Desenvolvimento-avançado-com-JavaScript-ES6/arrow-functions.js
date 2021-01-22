var soma = function(a,b) {
    return a + b;
}



    // Arrow functions

var sum = (a,b) => a+b; //return implicito
//console.log(sum(5,4));

var sum1 = a => a+5; //Parentes desnecessários em casos de parámetro único
//console.log(sum1(3));

var createObj = () => ({ test: 123}); //Criação de um objeto literal com arrow functions e return implicito
//console.log(createObj());

var obj = {
    showContext: function showContext() {
        setTimeout(() => {
            this.log('Espera 1s');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
}

obj.showContext();