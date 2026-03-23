import { User_model } from "../Models/User_model.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'

export const login = async(req, resp)=>{
    const {email, password} = req.body;

    try{
        let user = await User_model.findOne({email});
        console.log(user)
        if (!user){
            return resp.json({msg: "user not found", success: false})
        }

        const valid_password = await bcryptjs.compare(password, user.password);
        if (!valid_password){
            return resp.json({msg: "Invalid credentials", success: false});
        }

        const token = jwt.sign({userId:user._id},"!!#@$^(%&%$",{
            expiresIn:'365d'
        })

        const role = user.role;
        resp.json({msg: `Welcome ${user.name}`,token, role, success: true});
    }
    catch(err){
        console.error(`Error: ${err.message}`);
        resp.status(500).json({msg: "An error occurred", success: false});
    }
}

export const register = async (req, resp)=>{
    const {name, email, role, password} = req.body;

    try{
        let user = await User_model.findOne({email});
        if (user){
            return resp.json({msg: "user already registered",success: false})
        }
        else{

        const hashed_password = await bcryptjs.hash(password,10)
        let user_data  = await new User_model({name, email,role, password:hashed_password})
        await user_data.save();
        console.log(user_data)
        resp.json({msg:"user successfully register", success: true})
        }
        
    }
    catch(err){
        resp.json({msg:"get Error"})
        console.log("get error")
    }
}

