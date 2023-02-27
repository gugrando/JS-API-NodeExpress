const express = require("express")
const app = express()
const PORT = 3000

app.get("/ender/:id/:user" , (request, response)=>{
  const {id, user} = request.params
  response.send(`Hello, World! - Message's ID is ${id} - User: ${user}`)
})

app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`)
})