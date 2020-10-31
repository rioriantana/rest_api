const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Siswa = sequelize.define("siswa", {
        nis: {
            type: Sequelize.INTEGER
        },
        nama: {
            type: Sequelize.STRING
        },
        kelas: {
            type: Sequelize.STRING
        },
        tanggal_lahir: {
            type: Sequelize.DATE
        },
        alamat: {
            type: Sequelize.STRING
        },
        angkatan: {
            type: Sequelize.STRING
        }
    })
    
    return Siswa;
};