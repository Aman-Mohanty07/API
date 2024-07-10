const mongoose = require('mongoose');

const mongo_uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/authtest';
mongoose
    .connect(mongo_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    .then(() => console.log("Connected"))
    .catch(() => console.log("Error"))

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