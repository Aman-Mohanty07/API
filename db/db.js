const mongoose = require('mongoose');
require('dotenv').config()
const mongo_uri = process.env.MONGO_URI;
mongoose
    .connect(mongo_uri)
    .then(() => console.log("Connected"))
    .catch(err => console.log(err))

// auth schema
const authSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: String,
        requied: true
    }
});

const auth = mongoose.model('auth', authSchema, 'creds'); // collection

module.exports = auth;