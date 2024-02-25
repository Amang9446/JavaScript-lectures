// // Node Js
// const http = require('http');
// const server = http.createServer((request, response) =>{
//         response.end("I am running");
// });
// server.listen(3001,()=>{
//     console.log("Server is running on port 3001");
// });


// Express js 

const express = require('express');

const app = express();

app.get('/',(req, res)=>{
    res.send("Hello Node JS")
});

app.listen(3000,()=>{
    console.log("Server is running on Port 3000");
})

