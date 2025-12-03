import dotenv from "dotenv";
dotenv.config();

// import {express} from express
import e from "express";

const app = e();

app.get("/api/jokes",(req,res)=>{
const jokes = [
  {
    id: 1,
    title: "Programming Joke",
    joke: "Why do programmers prefer dark mode? Because light attracts bugs!"
  },
  {
    id: 2,
    title: "Math Joke",
    joke: "Why was the math book sad? Because it had too many problems."
  },
  {
    id: 3,
    title: "Teacher Joke",
    joke: "Teacher: Why are you late? Student: Because of the sign. Teacher: Which sign? Student: The one that says 'School Ahead, Go Slow'."
  },
  {
    id: 4,
    title: "Computer Joke",
    joke: "Why did the computer go to the doctor? It had a virus!"
  }
];
res.send(jokes)
})

const port = process.env.PORT || 3000


app.listen(port , ()=>{
    console.log(`project link : http://localhost:${port}`);
    
})