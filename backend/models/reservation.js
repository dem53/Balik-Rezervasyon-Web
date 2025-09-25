const mongoose = require('mongoose');
const Reservation = mongoose.Schema;

const ReservationSchema = new Reservation({

    ad: {
        type: String,
        required: true,
        trim: true
    },

    nachname: {
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
        trim: true,
        maxlength: 11
    },

    person: {
        type: String,
        enum: ['1', '2', '3'],
        required: true
    },

    angeltour: {
        type: String,
        enum: ['Halbtagestour (05:00-13:00)', 'Halbtagestour (13:00-19:00)', 'Ganztagestour(05:00-19:00)'],
        required: true
    },

    location: {
        type: String,
        enum: ['Antalya - City', 'İzmir - Seferihisar', 'Antalya - Adrasan'],
        required: true
    },

    status: {
        type: String,
        enum: ['pending', 'loading', 'red', 'success'],
        default: 'pending'
    },

    startDate: {
        type: Date,
        required: true
    },

    endDate: {
        type: Date,
        required: true
    },

    createdDate: {
        type: Date,
        default: Date.now
    },
    
    message: {
        type: String,
        trim: true,
        required: false
    }
});

ReservationSchema.pre('save', function (next) {
    if (this.startDate >= this.endDate) {
        return next(new Error('Bitiş tarihi başlangıç tarihinden sonra olmalıdır'));
    }
    if (this.startDate <= new Date()) {
        return next(new Error('Başlangıç tarihi bugünden sonra olmalıdır'));
    }
    next();
});

module.exports = mongoose.model('reservation', ReservationSchema);