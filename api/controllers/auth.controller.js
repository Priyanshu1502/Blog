import User from "../models/user.models.js"
import bcryptjs  from 'bcryptjs'
import { errorHandeler } from "../utils/error.js"
import jwt from 'jsonwebtoken'

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

    export const signin = async (req, res, next) =>{
        const {email, password} = req.body

        if(!email || !password || email === ''|| password === ''){
            next(errorHandeler(400, 'All feilds are required'))
        }

        try{
            const validUser = await User.findOne({email})
            if(!validUser){
                return next(errorHandeler(404, 'User not found'))
            }
            
            // console.log(validUser);

            const validPassword = bcryptjs.compareSync(password, validUser.password);
            // const ValidNPassword =()=>{
            //     if(!validPassword){
            //         password === validUser.password;
            //         return true;
            //     }else{ return false }        
            // }
            // console.log(ValidNPassword())
            if(!validPassword){
                return next(errorHandeler(400, 'Invalid Password'))
            }
            const token = jwt.sign(
                { id: validUser._id }, process.env.JWT_SECRET
            )

            const{password: pass, ...rest}= validUser._doc

                res.status(200).cookie('access_token', token, {
                    httpOnly: true}).json(rest)
                

        }catch (error){
            next(error)
        }
    }