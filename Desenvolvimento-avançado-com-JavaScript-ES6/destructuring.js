//Antes do ES6
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

var obj = {
    name: 'Matheus',
    props: {
        age: 18,
        favoriteColors: ['black', 'purple']
    }
}

var name = obj.name;
var age = obj.props.age;

var arrObj = [{ name: 'Apple', type: 'Fruit'}];

var fruit1 = arrObj[0].name;

// Com DESTRUCTURING

var [apple2, banana2, orange2, [tomato2]] = [
    'Apple', 
    'Banana', 
    'Orange', 
    ['tomato']
];

var { name: nome, props: {age: idade, favoriteColors: [color1, color2]} } = obj;       // Atributo do objeto, seguido do nome a ser chamado

var [{ name: fruta, type: tipo}] = arrObj;


console.log(tipo);