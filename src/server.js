require("express-async-errors") //imports express-async-errors
const AppError = require("./utils/AppError") //const AppError receives the AppError from utils
const { request, response } = require("express")
const express = require("express")//Import express for const express
const app = express()//Starts express in const app
const PORT = 3333//Define the web PORT

//receives all routes from ./routes
const routes = require("./routes") 

//tell express to use .json with default
app.use(express.json())

//tell express to 'listen' routes in the const routes from './routes'
app.use(routes)


app.use (( error, request, response, next )=>{
  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }
  console.error(error)

  return response.status(500).json({
    status: "error",
    message: "Server Internal Error"
  })
})

app.listen(PORT, ()=>{//Express listening the PORT)
  console.log(`Server is running on port ${PORT}`)
})


// app.get("/ender/:id/:user" , (req, res)=>{ //Express Source's response 
//   const {id, user} = req.params//Destructure the req.params
//   res.send(`Hello, World! - Message's ID is ${id} - User: ${user}`)//This is the res
// })