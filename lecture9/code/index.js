const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise1 resolved");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise2 resolve");
  }, 5000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise3 reject");
  }, 6000);
});

Promise.any([p1, p2, p3]).then(res =>
    {console.log(res)
    })
    .catch((err) =>{
        console.log(err);
    })

// return array 
// p1  3 sec
// p2 4 sec
// p3 1 sec

// Promise.allSettled();
// Promise.race();
// Promise.any();
