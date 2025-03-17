

const userModel = require('../models/user');
const bcrypt = require('bcrypt');

async function register(req, res) {
    const { email, password } = req.body;
    // const user = await userModel.create({ email, password });
    // res.json({
    //     status: 200,
    //     message: 'user created',
    //     data: user
    // });

    const payload = req.body

    const hashpassword = await bcrypt.hash(req.body.password, 10);
    // const hashpassword = bcrypt.hashSync(payload.password, 10);
    const user = await userModel.create({
        ...payload, password: hashpassword
    })
    // res.redirect('/')
    res.json({
        status: 200,
        message: 'user created',
        data: user
    })
}

async function login(req, res) {
    const { email, password } = req.body;
    const user = await usermodel.findOne({ email: email });
    if (!user) return res.json({ status: 404, message: 'user not found' });
    const isvalid = await bcrypt.compare(password, user.password);
    if (!isvalid) return res.json({ status: 400, message: 'invalid password' });


}

module.exports = { register }