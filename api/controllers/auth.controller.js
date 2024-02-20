import User from "../models/user.models.js"
import bcryptjs  from 'bcryptjs'
import { errorHandeler } from "../utils/error.js"

export const signup = async (req,res, next) =>{
    const {username, email, password} = req.body
    console.log(req.body)
    if(!username || !email || !password || username === "" || email === "" || password === ""){
     next(errorHandeler(400, 'All Feilds are required'))
    }

    const hashedPassword = bcryptjs.hashSync(password,10)

    const newUser = new User({
        username,
        email,
        password: hashedPassword
    })

    try{

        await newUser.save();
        res.json('signup successful')

    }
    catch(error){
        next(error)
    }}