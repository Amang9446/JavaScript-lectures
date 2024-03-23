const express = require("express");
require("./db");
const { createUser , findAllUsers, findById, update} = require("./models/user")
const app = express();
app.use(express.json());


app.post("/add", async (req, res) =>{
  try{
    const data = await createUser(req.body);
    res.status(201).json({data})
  }catch(error){
    console.log(error);
    res.status(500).json({error: "Failed to create user"})
  }
});

app.get("/get", async(req, res)=>{
  try {
    const data = await findAllUsers();
  res.status(200).json(data)
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Failed to get users"})
  }
})

app.get("/get-by-id/:id", async(req, res)=>{
  try {
    const data = await findById(req.params.id);
    res.status(200).json({data: data})
  } catch (error) {
    res.status(500).json({error: "faild to get user"})
  }
})
app.put("/update/:id", async(req, res)=>{
  try {
    await update(req.param.id, req.body);
    res.status(200).send("Update succesfully")
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "failed to update"})
  }
})
















app.get("/", (req, res) => {
  res.send("Hello Aman");
});

app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});
