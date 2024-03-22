const express = require("express");
require("./db");
const { createUser , findAllUsers} = require("./models/user")
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

app.get("/", (req, res) => {
  res.send("Hello Aman");
});

app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});
