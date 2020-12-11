const UserModel = require("../models/User");
exports.getUsers = async (req, res, next) => {
  // get users from db
  try {
    const userList = await UserModel.findAll();
    console.log(userList);
    res.render("users", { userList });
  } catch (error) {
    res.send("An error occured");
  }
};

exports.addUser = (req, res) => {
  res.render('addUser')
}