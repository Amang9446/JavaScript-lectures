const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved");
  }, 5000);
});

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise resolved");
//   }, 10000);
// });

// async function data() {
//   console.log("Hello World");
//   const value1 = await promise1; // user data
//   console.log("Hello1");
//   console.log(value1);

//   const value2 = await promise2;
//   console.log("Hello2");
//   console.log(value2);
// }
// data();


const ApiURL = "https://dummyjson.com/carts";

async function getData() {
  try {
    const data = await fetch(ApiURL);
    const actualdata = await data.json();
    console.log(actualdata);
  } catch (err) {
    console.log(err);
  }
}

getData();
