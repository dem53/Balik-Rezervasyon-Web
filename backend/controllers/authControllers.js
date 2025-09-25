const Auth = require('../models/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Tüm alanları lütfen doldurunuz'
            });
        }

        const user = await Auth.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'Böyle bir email adresine kayıtlı kullanıcı yok'
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: 'Girdiğiniz şifre hatalı!!'
            });
        }

        const token = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.SECRET_TOKEN,
            { expiresIn: '1d' });

        
        res.status(200).json({
            success: true,
            message: 'Kullanıcı başarıyla giriş yaptı',
            user: {
                email: user.email,
                isAdmin: user.isAdmin
            },
            token
        });

        console.log('Giriş yapan kullanıcı :', user);
        console.log('Giriş yapan kullanıcı token : ', token);

    } catch (error) {
        console.error('Giriş yapılırken hata', error);
        return res.status(500).json({
            success: false,
            message: 'Giriş yapılırken sunucu hatası ile karşılaşıldı'
        });
    }
};



module.exports = { login };