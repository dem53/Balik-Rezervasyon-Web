const mongoose = require('mongoose');
const Auth = mongoose.Schema;

const AuthSchema = new Auth({

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },


    password: {
        type: String,
        required: true,
        trim: true
    },

    
    isAdmin: {
        type: Boolean,
        default: false
    },

    
    createdDate: {
        type: Date,
        default: new Date()
    }

});


module.exports = mongoose.model('auth', AuthSchema);

