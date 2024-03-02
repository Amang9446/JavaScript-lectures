const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://amancodegaragetech:aDlMOOGNaAREM8iR@cluster0.btgbiqe.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url, {
  useNewUrlParser: false,
  useUnifiedTopology: false,
});

async function connect() {
  try {
    await client.connect();
    console.log("Connected to Database");
  } finally {
  }
}

connect().catch(console.dir);
