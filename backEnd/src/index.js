// require("dotenv").config()

// const express = require("express")

// const mongoose = require("mongoose")


// const app = express()

// app.use(express.json())

// const port = process.env.PORT || 4000

// (async ()=>{
// try {
//     await mongoose.connect(process.env.DB_URL)
//     .then(()=>{
//         app.listen(port , ()=>{
//             console.log("server running at ", port)
//         })
//     })
// } catch (error) {
    
// }})()


require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")

const app = express()

// console.log("app : ",app);


app.use(express.json())

const  PORT = process.env.PORT || 4000

console.log("PORT :",PORT);
console.log("DB url : ",process.env.DB_URL);



;(async()=>{
try {
    await mongoose.connect(process.env.DB_URL)
    .then(()=>{
        app.listen(PORT ,()=>{
        console.log("server running at ",PORT);
    }
    )
    })
} catch (error) {
    console.error("ERROR : ", error)
}
})()



