const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const dataBase = require('./config/db');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const Auth = require('./routes/authRoutes');
const Contact = require('./routes/contactRoutes');
const Reservation = require('./routes/reservationRoutes');


// DIŞ BAĞLANTI
dotenv.config({
    debug: true
});


// SERVER
const app = express();


// DataBase
dataBase();


// CORS
app.use(cors({
    origin: [
        'http://localhost:5173'
    ],
    credentials: true,
    methods: ['GET', 'PATCH', 'DELETE', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
}));


// MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());

// Routes

app.use('/api', Auth);
app.use('/api', Contact);
app.use('/api', Reservation);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor...`);
})