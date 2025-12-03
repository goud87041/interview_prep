import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import axios from axios ;
import axios from 'axios'

function App() {
  const [jokes , setJokes] = useState([])

  useEffect(()=>{
    axios.get("/api/jokes")
    .then((Response)=>{
      setJokes(Response.data)
      
    })
    .catch((error)=>{
      console.log(jokes);
      console.log(error);
      
    })
  })

 return (
  <>
 
 <h2>jokes : {jokes.length}</h2>
 <ul>
  {
    jokes.map((joke,index)=>(
      <li key={joke.id}>
        <div>{joke.title}</div>
        <div>{joke.joke}</div>
      </li>
    ))
  }
 </ul>
  </>
 )
}

export default App
