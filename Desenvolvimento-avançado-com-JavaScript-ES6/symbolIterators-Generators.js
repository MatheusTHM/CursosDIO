// Symbols

const uniqueId = Symbol('hello');
//const uniqueId2 = Symbol('hello');
//console.log(uniqueId === uniqueId2);      //False


//Well Known Symbols
Symbol.iterator

const arr = [1, 2, 3, 4];
const str = 'Desenvolvimento com ES6';

// const it = arr[Symbol.iterator]();

// while (true) {
//     let { value, done} = it.next()

//     console.log(value);

//     if(done) {
//         break;
//     }
// }

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (let i = 0; i < this.values.length; i++) {
            yield this.values[i];
            
        }
    } 
};

for (let value of obj) {
    console.log(value);
}

//const it = obj[Symbol.iterator]();

const arr2 = [...obj];
//console.log(arr2);



// GENERATORS

// function* hello() {
//     console.log('Hello');
//     yield;
    
//     console.log('From');
//     yield;

//     console.log('Function');
// }

// const it = hello();

// function* naturalNumbers() {
//     let number = 0;
//     while (true) {
//         yield number;
//         number++;
//     }
// }

// const it = naturalNumbers();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());