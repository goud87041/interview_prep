import express from "express"


const app  = express()

app.use(cros({
    origin : process.env.PORT,
    credentials : true
}))

