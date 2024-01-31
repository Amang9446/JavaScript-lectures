// call back hell

console.log("sdgdfvj");
console.log("sdflkhskjgn");
setTimeout(() =>{
    console.log("sefjdsufb");
},1000)
console.log("lsdfkjbsdjfb");

const cart = ["shoes", "pen", "shirt"];

api.createOrder(cart, function () {
  api.proceedTopayment(function () {
    api.summary(function () {
      api.wallet();
    });
  });
});


// promises three states
// reject
// resolve
// pending

// const data = function print(){
//     return 5+6;
// }

// console.log(data());

// items added to the cart 
const promise = appi.create(cart);

promise.then(function(orderid){
    payment();
})


const api = "https://fakestoreapi.com/products";

const data = fetch(api);


createOrder(cart)
.then(orderid => proceedToPaymrt(orderid))
.then(paymentInfo => showOrder(paymentInfo))


// const data = ()=> 5;
// function sum(){
//     return sum
// }