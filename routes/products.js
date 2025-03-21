const router = require('express').Router();
const { addproduct, allproduct, deleteproduct } = require('../controllers/products');
const multer = require('multer');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const upload = multer({ storage: storage })

router.post('/addproduct', upload.single('image'), addproduct);
// router.post('/', upload.single('image'), addproduct); jo aama addproduct no lakhi to link ma pan nai lakhvanu pade
router.get('/allproduct', allproduct);
router.put('/deleteproduct', deleteproduct);

module.exports = router;