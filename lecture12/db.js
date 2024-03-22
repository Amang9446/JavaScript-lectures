const mongoose = require('mongoose')
const url = "mongodb+srv://amancodegaragetech:aDlMOOGNaAREM8iR@cluster0.btgbiqe.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to Database");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

connect().catch(console.error);

module.exports = mongoose;


