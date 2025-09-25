const Contact = require('../models/contact');


const getContact = async (req, res) => {

    try {

        const contact = await Contact.find();

        if (!contact) {
            return res.status(400).json({
                success: false,
                message: 'İletişim formu bulunamadı'
            });
        }

        res.status(201).json({
            success: true,
            message: 'İletişim formları başarıyla getirildi',
            contact
        });


    } catch (error) {
        console.error('İletişim formları getirilirken hata', error);
        return res.status(500).json({
            success: false,
            message: 'İletişim formları getirilirken hata ile karşılaşıldı'
        });
    }
};

const createContact = async (req, res) => {

    try {
        
        const { name, email, phone, message } = req.body;

        if (!name || !email || !phone || !message) {
            return res.status(400).json({
                success: false,
                message: 'Tüm alanların doldurulması zorunludur.'
            });
        }
        const newContact = await Contact.create({
            name,
            email,
            phone,
            message
        });

        res.status(201).json({
            success: true,
            message: 'İletişim formu başarıyla oluşturuldu',
            contact: {
                id: newContact._id,
                name: newContact.name,
                email: newContact.email,
                phone: newContact.phone,
                message: newContact.message
            }
        });

        console.log("İletişim formu başarıyla oluşturuldu", newContact);

    } catch (error) {
        console.error('İletişim formu oluşturulurken hata ', error);
        return res.status(500).json({
            success: false,
            message: 'İletişim formu oluşturulurken hata!!!'
        });
    }
};



const deleteContact = async (req, res) => {

    try {
        const { id } = req.params;
        const deleteContact = await Contact.findByIdAndDelete(id);

        if(!deleteContact){
            return res.status(400).json({
                success: false,
                message: 'Silinecek iletişim formu bulunamadı'
            });
        }

        res.status(201).json({
            success: true,
            message: 'İletişim formu başarıyla silindi',
            contact: deleteContact
        });

    } catch (error) {
        console.error('İletişim formu silinirken hata', error);
        return res.status(500).json({
            success: false,
            message: 'İletişim formu silinirken hata ile karşılaşıldı',
            error: error.message
        });
    }
};




module.exports = { createContact, getContact, deleteContact };