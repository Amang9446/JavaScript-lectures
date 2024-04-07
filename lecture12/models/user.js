const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema)

async function createUser(data){
    try{
        const existingUser = await User.findOne({email: data.email});
        if(existingUser){
            const message = "Email already Exist"
            return message;
        }
        const hashpassword = await bcrypt.hash(data.password, 10);
        const user = new User({
            username: data.username,
            email: data.email,
            password: hashpassword
        });
        const result = await user.save();
        return result;
    }catch(error){
        console.log(error);
        throw error;
    }
}

async function login(data){
    try {
        const user = await User.findOne({email: data.email})
        if(!user){
            return { message: "Users doesn't exist"}
        }
        const matchedpassword = await bcrypt.compare(data.password, user.password);
        if(!matchedpassword){
            return { message: "Invalid Password"}
        }
        return {message: "Login Successfully"}
    } catch (error) {
        console.log(error);
        throw error
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
module.exports = {createUser, findAllUsers, findById, update, login}
