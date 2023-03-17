const AppError = require("../utils/AppError")

class UsersController{
  create(request, response){
    const { name, yo, email} = request.body
  
    if(!name){
      throw new AppError("Nome Obrigatório!")
    }
    response.status(200).json({name, yo, email })
  }
}
module.exports = UsersController
