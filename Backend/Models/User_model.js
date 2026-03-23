import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type: String, require:true},
    email:{type:String, require:true, unique:true},
    role: {type: String, enum: ['user', 'admin'], default: 'user'},
    password:{type: String, require:true},
})

export const User_model = mongoose.model('user',userSchema)