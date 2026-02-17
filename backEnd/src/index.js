require("dotenv").config()

const express = require("express")

const mongoose = require("mongoose")


const app = express()

app.use(express.json())

const port = process.env.PORT || 4000

(async ()=>{
try {
    await mongoose.connect(process.env)
} catch (error) {
    
}})()

