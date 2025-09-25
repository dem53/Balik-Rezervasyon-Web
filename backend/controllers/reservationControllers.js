const Reservation = require('../models/reservation');
const nodemailer = require('nodemailer');

const WEB_TİTLE = "EXTREME FISHING TURKEY";

const getReservation = async (req, res) => {

    try {
        const reservation = await Reservation.find();

        if (!reservation) {
            return res.status(400).json({
                success: false,
                message: 'Rezervasyonlar getirilirken hata oluştu!'
            });
        }

        res.status(201).json({
            success: true,
            message: 'Tüm rezervasyonlar başarıyla getirildi',
            reservation
        });

    } catch (error) {
        console.error('Rezervasyonlar getirilirken hata ile karşılaşıldı', error);
        return res.status(500).json({
            success: false,
            message: 'Sunucu kaynaklı hata!! Rezervasyonlar getirilemedi.'
        });
    }
}


const createReservation = async (req, res) => {

    try {

        const { ad, nachname, email, phone, person, angeltour, location, startDate, endDate, message } = req.body;

        if (!ad || !nachname || !email || !phone || !person || !angeltour || !location || !startDate || !endDate) {
            return res.status(400).json({
                success: false,
                message: 'Tüm alanların doldurulması zorunludur'
            });
        }

        const newReservation = await Reservation.create({
            ad,
            nachname,
            email,
            phone,
            person,
            angeltour,
            location,
            startDate,
            endDate,
            message
        });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        });


        const customerMailOptions = {
            from: `"Extreme Fishing Turkey" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: 'Reservation Confirmation',
            html: `
                <h1><strong>${WEB_TİTLE}</strong></h2>
                <h2>Darling ${ad} ${nachname},</h2>
                <p>Your reservation has been successfully received.</p>
                <h3>Details of your reservation:</h3>
                <ul>
                    <li><strong>Tour:</strong> ${angeltour}</li>
                    <li><strong>Location:</strong> ${location}</li>
                    <li><strong>Date:</strong> ${new Date(startDate).toLocaleDateString()} - ${new Date(endDate).toLocaleDateString()}</li>
                    <li><strong>Person:</strong> ${person}</li>
                    <li><strong>Contact:</strong> ${phone}</li>
                </ul>
                ${message ? `<p><strong>Note:</strong> ${message}</p>` : ''}
                <p>Thank you very much, sir!</p>
            `
        };

        const adminMailOptions = {
            from: `"Yeni Rezervasyon Bilgisi " <${process.env.GMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL,
            subject: `Yeni Rezervasyon: ${ad} ${nachname}`,
            html: `
                <h2>Yeni Rezervasyon Bildirimi</h2>
                <h3>Müşteri Bilgileri:</h3>
                <ul>
                    <li><strong>Ad-Soyad:</strong> ${ad} ${nachname}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Telefon:</strong> ${phone}</li>
                </ul>
                <h3>Rezervasyon Detayları:</h3>
                <ul>
                    <li><strong>Tur:</strong> ${angeltour}</li>
                    <li><strong>Lokasyon:</strong> ${location}</li>
                    <li><strong>Tarih:</strong> ${startDate} - ${endDate}</li>
                    <li><strong>Kişi Sayısı:</strong> ${person}</li>
                </ul>
                ${message ? `<p><strong>Müşteri Notu:</strong> ${message}</p>` : ''}
            `
        };

        await transporter.sendMail(customerMailOptions);
        await transporter.sendMail(adminMailOptions);

        
        return res.status(201).json({
            success: true,
            message: 'Rezervasyon başarıyla oluşturuldu ve email gönderildi',
            reservation: {
                id: newReservation._id,
                ad: newReservation.ad,
                nachname: newReservation.nachname,
                email: newReservation.email,
                phone: newReservation.phone,
                person: newReservation.person,
                angeltour: newReservation.angeltour,
                location: newReservation.location,
                startDate: newReservation.startDate,
                endDate: newReservation.endDate,
                message: newReservation.message
            }
        });

    } catch (error) {
        console.error('Rezervasyon oluşturulurken hata:', error);
        return res.status(500).json({
            success: false,
            message: 'Rezervasyon oluşturulurken hata ile karşılaşıldı'
        });
    }
};


const deleteReservation = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteReservation = await Reservation.findByIdAndDelete(id);

        if (!deleteReservation) {
            return res.status(400).json({
                success: false,
                message: 'Silinecek bir rezervasyon bulunamadı'
            });
        }

        res.status(201).json({
            success: true,
            message: 'Rezervasyon başarıyla silindi'
        })
    } catch (error) {
        console.error('Rezervasyon silinirken hata!!', error);
        return res.status(500).json({
            success: false,
            message: 'Rezervasyon silinirken hata ile karşılaşıldı'
        });
    }
}


module.exports = { getReservation, createReservation, deleteReservation }