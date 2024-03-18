const { MongoClient } = require("mongodb");
const url = "mongodb+srv://amancodegaragetech:aDlMOOGNaAREM8iR@cluster0.btgbiqe.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  try {
    await client.connect();
    console.log("Connected to Database");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

connect().catch(console.error);

module.exports = client;


