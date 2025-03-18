const userModel = require('../models/user');
const bcrypt = require('bcrypt');

async function register(req, res) {
    const { email, password } = req.body;
    const payload = req.body
    const before = await userModel.findOne({ email: email });
    if (before) return res.json({ status: 400, message: 'user already exists' });
    const passwordentered = await userModel.findOne({ password: password });
    if (!passwordentered) return res.json({ status: 400, message: 'enter password' });
    const hashpassword = await bcrypt.hash(req.body.password, 10);
    const user = await userModel.create({
        ...payload, password: hashpassword
    })
    res.json({
        status: 200,
        message: 'user created',
    })
}

async function login(req, res) {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    if (!user) return res.json({ status: 404, message: 'user not found' });
    const isvalid = await bcrypt.compare(password, user.password);
    if (!isvalid) return res.json({ status: 400, message: 'invalid password' });
    res.json({ status: 200, message: 'login success', data: user })
}

module.exports = { register, login }