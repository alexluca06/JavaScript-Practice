import fetch from 'node-fetch';  // MUST INSTALL 'node-fetch'

// Put my asynchronous code inside a promise

const myPromise = new Promise((resolve, reject) => {
    // some asynchronous code
    setTimeout(() => {
        let sum = 0;
        for(let i = 0; i < 10; i++) {
            sum += i;
        }
        (sum != 0)?resolve(sum):reject("Somethig went wrong...");
    }, 2000);
    
});

// What did it happen with my promise?

myPromise
    .then((value) => {
        // make some heavy stuff with this value
        console.log( Math.pow(value, 2));  // resolve case
    })
    .catch((err) => {
        console.log(err);  // reject case
    });

/* 
*   The above example is just theoretical...
*   Let's do some real stuff!
*/

const url = 'https://randomuser.me/api/';

const getUser = () => {
    fetch(url)  // return a promise
        .then((response) => {
            return response.text();  // return a promise, too
        })
        .then((data) => {
            console.log(data);  // print data from API
        })
        .catch((err) => {
            console.log(err);
        });
}

getUser();

/**
 *  Promise.all([]): resolve a bunch of promises(the order doesn't matter)
 */

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It is solved!');
    },1000);
});

const promise2 = fetch(url).then((response) => {
    return response.text();
});

const promise3 = new Promise((resolve, reject) => {
    let prod = 1;
    for(let i = 1; i < 10; i++) {
        prod *= i;
    }
    resolve(prod);
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
