require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { auth, adminmiddleware } = require('./middleware/auth');

const dbconnections = require('./configs/db');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/products');


const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ exauthtended: false }));
app.use(cookieParser());

dbconnections();
app.use('/user', userRouter);
app.use('/auth',adminmiddleware , authRouter);
app.use('/product', productRouter)

app.listen(process.env.PORT, () => {
    console.log('server on 8080')
})