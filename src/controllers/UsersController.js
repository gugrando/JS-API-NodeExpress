class UsersController{
  create(req, res){
    const { name, yo, email} = req.body
    res.json({ name, yo, email })
  }
}
module.exports = UsersController
