const { default: mongoose } = require("mongoose");

const userSchema =new  mongoose.Schema({
    name : {
        type : String ,
        required : true,
    },
    lastName : {
        type : String , 
        required : true
    },
    password : {
        type : String,
        required : [true,"password is require"]
    },
    email :{
        type : String,
        required : true,
        unique : true,
        lowercase : true ,
        trim : true
    },
    userName : {
        type : String ,
        required : true,
        unique : true
    }

},{timestamps:true})




export const User = mongoose.model("User", userSchema)
