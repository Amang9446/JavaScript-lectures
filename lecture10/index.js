const express = require('express');
require("./db")
const app = express();

app.get('/',(req, res)=>{
    res.send("Hello Aman")
});

app.listen(3000,()=>{
    console.log("Server is running on Port 3000");
})
