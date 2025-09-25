const Auth = require('../models/auth');
const jwt = require('jsonwebtoken');

const authToken = async (req, res, next) => {

    try {

        const token = req.headers.authorization?.split(' ')[1];
        if (token) {

            const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
            const user = await Auth.findById(decoded.id);

            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: 'Kullanıcı bulunamadı'
                });
            }

            req.user = user;
            return next();
        }
    } catch (error) {
        console.error('Authentication middleware error...', error);
        return res.status(500).json({
            success: false,
            message: 'Geçersiz veya süresi dolmuş token!!'
        });
    }
};


const isAdmin = (req, res, next) => {
    try {
        if (!req.user || !req.user.isAdmin) {
            return res.status(403).json({
                success: false,
                message: 'Bu işlem için admin yetkisi gereklidir.'
            });
        }
        next();
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: 'Yetkilendirme Hatası.'
        });
    }
};


module.exports = { authToken, isAdmin }