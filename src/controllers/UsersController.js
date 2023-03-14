class UsersController{
  create(req, res){
    const { name, yo, email} = req.body
    res.status(201).json({ name, yo, email })
  }
}
module.exports = UsersController
