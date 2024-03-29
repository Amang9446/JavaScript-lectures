const express = require("express");
require("./db");
const User = require('./models/user')
const app = express();
app.use(express.json());

app.post("/add", async(req, res) =>{
  const data = await User.create(req.body);
  res.status(201).send({data: data})
})

app.get('/getUsers', async(req, res)=>{
  const data = await User.findAll();
  res.status(200).send(data)
})

app.get("/getuser/:id", async(req, res)=>{
  const data = await User.findById(req.params.id);
  if(!data){
    return res.status(404).send("No User found")
  }
  res.status(200).send(data)
})

app.put("/update/:id", async(req, res) =>{
  await User.update(req.params.id, req.body);
  res.status(200).send("user info update")
})

app.delete("/delete/:id", async(req, res) =>{
  await User.delete(req.params.id);
  res.status(200).send("Deleted successfully")
})









app.get("/", (req, res) => {
  res.send("Hello Aman");
});

app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});
