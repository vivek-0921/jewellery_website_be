const mongoose = require('mongoose');

function dbconnections() {
    mongoose.connect(process.env.DB_CONNECTION_STRING)
        .then(() => console.log('Connected to MongoDB'))
        .catch((err) => console.log('error'))
}
module.exports = dbconnections;