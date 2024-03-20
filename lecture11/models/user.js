const { ObjectId } = require('mongodb');
const client = require('../db')
const dbName = "Movies";
const collectionName = 'users';

const User = {
    async create(data){
        try{
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.insertOne(data);
        return result;
        }catch(error){
            console.log(error);
            throw error;
        }
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
    },
    async update(id, data){
        try{
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.updateOne({_id: new ObjectId(id)}, {$set: data})
        return result;
        }catch(error){
            console.log(error);
            throw error;
        }
    },
    async delete(id){
        try{
            const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.deleteOne({_id: new ObjectId(id)});
        return result;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
}

module.exports = User;