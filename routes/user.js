const router = require('express').Router();
const { register } = require('../controllers/auth');
const { adduser } = require("../controllers/user");

router.post("/", adduser);
router.post("/register",register)

module.exports = router;






// {
//     "name":"vivek",
//     "lastname":"patel",
//     "contact":"123456789",
//     "email":"a@gmail.com",
//     "password":"a@gmail.com",
//     "role":"admin"
// }