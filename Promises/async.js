import fetch from 'node-fetch';  // MUST INSTALL 'node-fetch'

/**
 * Async...await sugar syntax(love candies <3)
 */

const makeSum = async function () {
    // Bye bye .then!
    try {
        const sum = await new Promise((resolve, reject) => {
            // some asynchronous code
            setTimeout(() => {
                let sum = 0;
                for(let i = 0; i < 10; i++) {
                    sum += i;
                }
                (sum != 0)?resolve(sum):reject("Somethig went wrong...");
            }, 2000);
        })
        console.log(sum);
    } catch (err) {
        console.log(err);
    }
}
makeSum();

const url = 'https://randomuser.me/api/';

const getSomeDataFromAPI = async () => {
    const response = await fetch(url);  
    if(response.ok) {
        const data = await response.text();  // Oh, fuck... another promise :((
        console.log(data);
    }
};

getSomeDataFromAPI();


const promise1 = new Promise((resolve) => {
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

const getPromisesResults = async () => {
    const results = await Promise.all([ promise1, promise2, promise3]);
    console.log(results);
};

getPromisesResults();