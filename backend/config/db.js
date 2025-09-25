const mongoose = require('mongoose');

const DataBaseConnect = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log('Veri tabanı bağlantısı başarıyla gerçekleşti');
    }).catch((err) => {
        console.log('Veri tabanı bağlantısı başarısız!!', err);
    })
};


module.exports = DataBaseConnect;