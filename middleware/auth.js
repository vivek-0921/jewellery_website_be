
const jwt = require('jsonwebtoken');
const userModel = require('../models/user');

async function auth(req, res, next) {
    const token = req.cookies?.auth;
    if (!token) return res.redirect('/login');
    const verify = await jwt.verify(token, 'this is sercret key');
    if (!verify) return res.redirect('/login');
    const user = await userModel.findById(verify.id);
    console.log(user);

    if (!user) return res.redirect('/login');
    req.user = user;
    next();
}
function adminmiddleware(req, res, next) {
    if(req.user.role === 'admin') next();
    return res.json({status:404,message:'you are not admin'})
}

module.exports = { auth ,adminmiddleware};