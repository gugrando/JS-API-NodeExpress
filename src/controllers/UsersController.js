//Imported AppError from utils
const AppError = require("../utils/AppError")

//Class responsible for create user
class UsersController{
  create(request, response){
    const { name, yo, email} = request.body
    
    //Check if the name exists, than throw the AppError that had imported previously
    if(!name || !yo || !email){
      throw new AppError("Required data!")
    }
    
    // If there is no error, give the answer with 200 status code and a .json
    response.status(200).json({name, yo, email })
  }
}

//Export the UserController class
module.exports = UsersController
