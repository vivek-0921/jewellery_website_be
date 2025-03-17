const userModel = require('../models/user');


async function adduser(req, res) {
    const payload = req.body;
    const user = await userModel.create(payload);

    // console.log(req.body);
    res.json({
        status: 200,
        message: "User created successfully",
        data: user
    })
}

module.exports = { adduser }
