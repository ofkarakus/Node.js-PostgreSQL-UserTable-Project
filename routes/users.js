var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

/* ==>   /users path   <==  */

router.get('/', usersController.getUsers);
router.get('/add', usersController.displayAddUserForm)
router.post('/add', usersController.addUser)

// Route icerisinde degisken olarak kullanmak istenen herseyin basina ":" konulur. 
// O da param olur ve params'in altinda yer alir. (req.params.id olarak cagrilir.)
router.get('/:id/delete', usersController.deleteUser)

router.get('/:id/edit/:firstName/:lastName', usersController.displayEditUserForm)
router.post('/:id/edit', usersController.editUser)
 
module.exports = router;
