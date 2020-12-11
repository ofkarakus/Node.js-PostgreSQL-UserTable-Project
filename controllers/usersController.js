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

// on post request
exports.addUser = async (req, res) => {
  // add to db
  try {
    await UserModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    res.redirect("/users");
  } catch (error) {
    console.log("An error occured", error);
  }
};

// on delete request
exports.deleteUser = async (req,res) => {
  try {
    await UserModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/users");
  } catch (error) {
    console.log("An error occured", error);
  }
};
