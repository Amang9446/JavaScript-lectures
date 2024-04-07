const express = require("express");
require("./db");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const cors = require("cors");
const {
  createUser,
  findAllUsers,
  findById,
  update,
  login,
} = require("./models/user");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/add", async (req, res) => {
  const { username, email, password } = req.body;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Some required feilds are missing" });
  }
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Email is not valid" });
  }

  try {
    const data = await createUser(req.body);
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { message } = await login(req.body);
    res.status(200).json({ message });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server error" });
  }
});

app.get("/get", async (req, res) => {
  try {
    const data = await findAllUsers();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get users" });
  }
});

app.get("/get-by-id/:id", async (req, res) => {
  try {
    const data = await findById(req.params.id);
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ error: "faild to get user" });
  }
});
app.put("/update/:id", async (req, res) => {
  try {
    await update(req.param.id, req.body);
    res.status(200).send("Update succesfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to update" });
  }
});

app.post("/upload",upload.array('file'), async (req, res, next) => {
  res.send("Uploaded");
});

app.get("/", (req, res) => {
  res.send("Hello Aman");
});

app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});
