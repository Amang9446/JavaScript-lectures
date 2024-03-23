const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema)

async function createUser(data){
    try{
        const user = new User(data);
        const result = await user.save();
        return result;
    }catch(error){
        console.log(error);
        throw error;
    }
}

async function findAllUsers(){
    try {
        const result = await User.find();
        return result;
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function findById(id){
    try {
        const result = await User.findById(id);
        return result;
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function update(id, data){
    try {
        const result = await User.findByIdAndUpdate(id, data, {new: true});
        return result;
    } catch (error) {
        console.log(error);
        throw error
    }
}
module.exports = {createUser, findAllUsers, findById, update}