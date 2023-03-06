class UsersController{
  create(req, res){
    const { name, yo} = req.body
    res.json({ name, yo})
  }
}

module.exports = UsersController