const mongoose = require('mongoose');
const Contact = mongoose.Schema;

const ContactShema = new Contact({

    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true
    },

    phone: {
        type: String,
        required: true,
        trim: true
    },

    message: {
        type: String,
        required: true,
        trim: true
    },

    createdDate: {
        type: Date,
        default: Date.now
    }

});


module.exports = mongoose.model('contact', ContactShema);