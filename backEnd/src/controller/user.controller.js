import asyncHandler from "../utils/asyncHandler.js"
import ApiError from "../utils/ApiError.js"
import { User } from "../models/user.model"
import { bcrypt } from bcrypt


const UserLogIn =   asyncHandler(async (req,res)=>{
const {userName , password} = req.body

if(!userName && !password){
    throw new ApiError(401 ,"userName or password is missing")
}

const user = await User.findOne(
    {
        $or : [{userName},{password}]
    }
)

if(!user){
    throw new ApiError(404 ,"user not found " )
}

})

const register = asyncHandler( async (req, res)=>{
    const {name , lastName , password , email , userName }= req.body 

    if(!name && password && email && userName){
        throw new ApiError (401 , "name , password , email or userName is missing ")
    }

    const isEmailExist = await User.findOne({email});

    if(!isEmailExist){
        throw new ApiError(404 , "email id already exist")
    }

    const hasPass  = await bcrypt.hash(password , 10 , (err , has )=>{
        if(err){
            throw new ApiError(402 , err)
        }
    })

    const userData = await User.create({
        name ,
        password : hasPass ,
        lastName ,
        email,
        lastName : lastName || "not available"
    })

    if(!userData){
        throw new ApiError(501 , "something went worng try again")
    }

    return res
    .status(201)
    .json(
    new ApiResponse(201 ,userData , "user regiter successfully")
    )

})

export {register,UserLogIn}