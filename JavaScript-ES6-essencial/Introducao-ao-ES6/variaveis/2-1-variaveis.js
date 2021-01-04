var test = 'exemplo';

(() => {
    var test;
    console.log(`Valor dentro da função "${test}"`);

    if (true) {
        test = 'exemple';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();