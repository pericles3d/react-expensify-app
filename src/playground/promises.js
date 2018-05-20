const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolved data');
        reject('This is reject');
    }, 3500);
});

console.log('before');

//data will come from resolve
promise.then((data) => {
    console.log(data);    
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');