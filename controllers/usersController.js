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

// get request
exports.displayAddUserForm = (req, res) => {
  res.render("addUser");
};

// post request
exports.addUser = async (req, res) => {
  // add to db
  console.log('req.body', req.body)
  try {
    const newUser = await UserModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    res.redirect('/users');
  } catch (error) {}
};
