require('dotenv').config();

const express = require('express');

const dbconnections = require('./configs/db');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');


const app = express();
app.use(express.json());
// app.use(express.urlencoded({ exauthtended: false }));


dbconnections();

app.use('/user', userRouter);
app.use('/auth', authRouter)

app.listen(process.env.PORT, () => {
    console.log('server on 8080')
})