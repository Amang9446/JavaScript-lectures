const { ObjectId } = require('mongodb');
const client = require('../db')
const dbName = "Movies";
const collectionName = 'users';

const User = {
    async create(data){
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.insertOne(data);
        return result;
    },
    async findAll(){
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.find().toArray();
        return result;
    },
    async findById(id){
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.findOne({_id: new ObjectId(id)})
        return result;
    }
}

module.exports = User;