const cart = ["shoes", "pants", "pen"];

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    console.log(orderId);
  })
  .catch(function (err) {
    console.log(err.message);
  });

function createOrder(cart) {
  const data = new Promise(function (resolve, reject) {
    if (!valdateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }

    const orderId = "589";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    } else {
      console.log("I am else");
      return;
    }
  });

  return data;
}

function valdateCart(cart) {
  // if in stock
  return false;
}
