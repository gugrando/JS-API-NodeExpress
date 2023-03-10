const express = require("express")//Import express
const app = express()//Starts express
const PORT = 3333//Define the web PORT

const routes = require("./routes")

app.use(express.json())
app.use(routes)

app.listen(PORT, ()=>{//Express listen the PORT)
  console.log(`Server is running on port ${PORT}`)
})


// app.get("/ender/:id/:user" , (req, res)=>{ //Express Source's response 
//   const {id, user} = req.params//Destructure the req.params
//   res.send(`Hello, World! - Message's ID is ${id} - User: ${user}`)//This is the res
// })