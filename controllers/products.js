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
            return res.status(400).json({ message: "Image file is required" });
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
        res.status(500).json({ message: error.message });
    }

}

async function allproduct(req, res) {
    const user = await userModel.find({});
    res.json(user)
}

// async function deleteproduct(req, res) {
//     const { id } = req.params;
//     const product = await userModel.findByIdAndDelete(id);
//     res.json({
//         status: 200,
//         message: "Product Deleted Successfully",
//         data: product
//     })
// }

async function deleteproduct(req, res) {
    try {
        const { id } = req.params;

        // Validate the ID format (optional, but good practice)
        if (!id) {
            return res.status(400).json({ message: "Product ID is required" });
        }

        // Find and delete the product
        const product = await userModel.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({
            status: 200,
            message: "Product Deleted Successfully",
            data: product,
        });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Error deleting product", error });
    }
}

module.exports = { addproduct, allproduct ,deleteproduct}