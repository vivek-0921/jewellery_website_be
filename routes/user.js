const router = require('express').Router();
const { register } = require('../controllers/auth');
const { adduser } = require("../controllers/user");

router.post("/", adduser);
router.post("/register",register)

module.exports = router;






