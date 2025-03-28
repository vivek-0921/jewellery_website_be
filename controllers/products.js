const {json} = require("express");
userModel = require('../models/product')

async function addproduct(req, res) {
    // const payload = req.body;
    // const file = req.file;
    // const user = await userModel.create({...payload, image: file.path});
    // res.json({
    //     status: 200,
    //     message: "Product Added Successfully",
    //     data: user
    // })

    try {
        const payload = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({message: "Image file is required"});
        }

        const product = await userModel.create({
            ...payload,
            image: file.path
        });

        res.json({
            status: 200,
            message: "Product Added Successfully",
            data: product
        });

    } catch (error) {
        res.status(500).json({message: error.message});
    }

}

async function allproduct(req, res) {
    const user = await userModel.find({});
    res.json(user)
}

async function deleteproduct(req, res) {

    const {id} = req.params;
    const product = await userModel.findByIdAndDelete(id);
    res.json({
        status: 200,
        message: "Product Deleted Successfully",
        data: product
    });
}

async function singleproduct(req, res) {
    const {id} = req.params;
    const payload = req.body;
    const product = await userModel.findById(id)
    res.json({
        status: 200,
        message: "Find Single Product Successfully",
        data: product
    })
}

async function updateproduct(req, res) {
    try {
        const { id } = req.params;
        const payload = req.body;

        // Check if a file is uploaded
        if (req.file) {
            payload.image = req.file.path; // Save the new image path
        }

        const product = await userModel.findByIdAndUpdate(id, payload, { new: true });

        res.json({
            status: 200,
            message: "Product Updated Successfully",
            data: product
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



module.exports = {addproduct, allproduct, deleteproduct ,updateproduct , singleproduct}