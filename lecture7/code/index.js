const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("promise resolved")
    },5000)
})

function data(){
    promise.then((res) => console.log(res))
    console.log("hello");
}

data();
async function data(){
    const value = await promise;
    console.log(value);
    console.log("Hello");
}
data();
