function hello() {
    console.log("hello");
}

setTimeout(hello , 2000)    //2000ms = 2 seconds

console.log("one");
console.log("two");
console.log("three");

setTimeout(() => {
    console.log("start");
}, 2000)

console.log("four");
console.log("five");

//------------ callback

function sum(a , b) {
    console.log(a+b);
}

function calc(a , b , sumCallBack) {
    sumCallBack(a , b);
}

calc(1 , 2 , sum);

const hello = () => {
    console.log("hello");
};

setTimeout(hello , 3000);  //-----here hello is a callBack

//-------------**** C A L L B A C K  H E L L ****
        Nested callBacks stacked below one another forming a pyramid structure  
             (PYRAMID OF DOOM)
                 difficult to understand and manage

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data" , dataId);
        if (getNextData) {
            getNextData();
        }
        
    }, 1000)
}



let btn1 = document.querySelector(".btn1");
    btn1.addEventListener("click", () => {
        getData(5 , () => {
            getData(4 , () => {
                getData(3 , () => {
                    getData(2 , () => {
                        getData(1 , () => {
                            getData("Happy New Year!!!!!")
                        })
                    })
                })
            });  
        });
    })
// ------------**** P R O M I S E S ****

        Promise is "eventual" completion of task
            It is an object in js
                It is a solution to callback hell

SYNTAX : 
    let promise = new promise((resolve , reject) => {    //function with 2 handlers

    }) 

Promise has 3 state 
    1 . pending - the result is undefined
    2 . resolved  (fulfilled) - the result is a value (fulfilled)    -- resolve (result)
    3 . rejected - the result is an error object  -- reject (error)

let promise = new promise((resolve , reject) => {
    console.log("I am promise");
    resolve("success");
});

function getData(dataId , getNextData) {
    return new Promise((resolve , reject ) => {
        setTimeout(() => { 
            console.log("data" , dataId);
            resolve("success");
            if (getNextData) {
                getNextData();
            }
        } , 9000);
    });
}
// output:
// let promise = getData(1123)
//                                  undefined
// promise
//                                  Promise {<pending>}
//                                                                              main.js:91 data 1123
// promise
//                                  Promise {<fulfilled>: 'success'}

//OUR WORK WITH PROMISE
//             1) .then()         ----> promise.then(() => {....})
//             2) .catch()        ----> promise.catch(() => {....})

let getPromise = () => {
    return new promise((resolve , reject) => {
        console.log("I am promise");
        resolve("success");
        // reject("some error");
    });
}

let promise = getPromise();
promise.then(() => {
    console.log("success", result);
})

let promise = getPromise();
promise.catch(() => {
    console.log("some error" , error)
})

//              **** promise chaining ****

function chain1() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("chaining starts!!!!");
            resolve("first chain success");
        }, 2000);
    })
}


function chain2() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("chaining starts!!!!");
            resolve("second chain success");
        }, 2000);
    })
}



let a1 = chain1();
    a1.then((res) => {
        console.log(res);
            console.log("here comes second chaining");
                let a2 = chain2();
                    a2.then((res) => {
                        console.log(res);
                    })
        });

//Same but better version from above

console.log("here comes first chaining");
chain1().then((res) => {
        console.log(res);
            console.log("here comes second chaining");
                chain2().then((res) => {
                        console.log(res);
                    })
        });

//---------------------xxxxxxx

 function chainFun() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("xxx");
            reject("some error in xxx");
        } , 2000);
    })
 }

 console.log("opeing xxx");

 let x1 = chainFun();
    x1.catch((err) => {
        console.log(err);
    })

// ---------------------**** A S Y N C  A W A I T ****

//* async function always returns promise

as//ync function myFunction() {...}

// ------**** A W A I T ****

// * await "pauses" the execution of its surroundings async function until the promise is settled
// * await is used only in async function

function api() {
    return new Promise(() => {
        setTimeout(() => {
            console.log("weather info");
            resolve(200);
        }, 2000);
    })
}

async function getWeather() {
    await api();
}

// ex : async await

    function getData(dataId) {
        return new Promise((resolve , reject) => {
            setTimeout(() => {
                console.log("data" , dataId);
                resolve("success");
            } , 2000);
        });
    }

    async function getAllData() {
        await getData(1);
        await getData(2);
        await getData(3);
    }

//     ------------------ **** I I F E ****   (Immediately Invoked Function Expression)

//     It is a function that is called immediately as soon as it is called.

//  syntax :   1) (function()) ();
//             2) (() => {...})();
 
            function getData(dataId) {
                return new Promise((resolve , reject) => {
                    setTimeout(() => {
                        console.log("data" , dataId);
                        resolve("success");
                    } , 2000);
                });
            }

            (async function getAllData() {
                await getData(1);
                await getData(2);
                await getData(3);
            })();
























































