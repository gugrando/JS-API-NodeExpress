const express = require("express")//Import express
const app = express()//Starts express
const PORT = 3000//Define the web PORT

app.use(express.json())

app.listen(PORT, ()=>{//Express listen the PORT)
  console.log(`Server is running on port ${PORT}`)
})

app.post("/users", (req, res)=>{
  const { name, yo} = req.body
  // res.send(`User: ${name}, YO: ${yo}`) 
  res.json({ name, yo})
})


// app.get("/ender/:id/:user" , (req, res)=>{ //Express Source's response 
//   const {id, user} = req.params//Destructure the req.params
//   res.send(`Hello, World! - Message's ID is ${id} - User: ${user}`)//This is the res
// })