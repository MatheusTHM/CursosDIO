function multiply(a,b) {
    return a * b;
}

//console.log(multiply(5)); // Resultado NaN


// lazy evaluation
function randomNumber() {
    console.log('Gerando número...');

    return Math.random() * 10;
}

function multiplicar (a, b = randomNumber()) {
    return a * b;
}

console.log(multiplicar(2)); //Cada chamada da função
console.log(multiplicar(2)); //Gera um número aleatório