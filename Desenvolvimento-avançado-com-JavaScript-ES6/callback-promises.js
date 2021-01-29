//CallBacks
function doSomething(callback) {
    setTimeout(function() {
        //something
        callback('First data');
    }, 500);
}

function doOtherThing(callback) {
    setTimeout(function() {
        //other thing
        callback('Second data');
    }, 500);
}

function doAll() {
    try{
        doSomething(function(data) {
            var processedData = data.split('');

            try{
                doOtherThing(function(data2) {
                    var processedData2 = data2.split('');

                    try{
                        setTimeout(function() {
                            //console.log(processedData, processedData2);
                        }, 1000);
                    } catch(err) {
                        //handle error
                    }
                })
            } catch(err){
                //handle error
            }
        });
    } catch(err) {
        //handle error
    }
}

doAll();


//Promisses ES6
/*
    Status de uma promise
    Pending
    Fulfilled
    Rejected
*/

const doSomethingPromise = () => new Promise((resolve, reject) => {
    //throw new Error('Something went wrong');
    setTimeout(function() {
        //something
        resolve('First data');
    }, 600);
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {
    //throw new Error('Something went wrong');
    setTimeout(function() {
        //other thing
        resolve('Second data');
    }, 500);
});


    //Invocando as Promises em sequência
// doSomethingPromise()
// .then(data => {
//     console.log(data.split(''));
//     return doOtherThingPromise();
// })
// .then(data2 => console.log(data2.split('')))
// .catch(error => console.log('Ops', error));


    //Invocando as Promises em paralelo
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err => {
    console.log(err);
});


    //Invocando a promisse que resolver primeiro
// Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
//     console.log(data);
// })