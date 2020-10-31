const db = require('../models')
const Siswa = db.siswa;
const Op = db.Sequelize.Op;


exports.findAll = (req, res) => {
    Siswa.findAll()
    .then(data=>{
        res.send({
            status: "success",
            data_siswa: data
        })
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || "Terjadi kesalahan!"
        })
    })
}

exports.findByNama = (req, res)=> {
    var query = req.params.query;
    var condition = query ? { nama: {[Op.like]: `%${query}%`} } : null;

    Siswa.findAll({attributes: ['nama', 'alamat'], where : condition})
    .then(data=>{
        res.send({
            status: "success",
            data_siswa: data
        })
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || "Terjadi kesalahan!"
        })
    })
}

exports.findByAlamat = (req, res)=> {
    var query = req.params.query;
    var condition = query ? { alamat: {[Op.like]: `%${query}%`} } : null;

    Siswa.findAll({where : condition})
    .then(data=>{
        res.send({
            status: "success",
            data_siswa: data
        })
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || "Terjadi kesalahan!"
        })
    })
}

exports.findByNis = (req, res)=> {
    var query = req.params.query;
    var condition = query ? { nis: {[Op.like]: `%${query}%`} } : null;

    Siswa.findAll({where : condition})
    .then(data=>{
        res.send({
            status: "success",
            data_siswa: data
        })
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || "Terjadi kesalahan!"
        })
    })
}

exports.addSiswa = (req, res) => {
    const siswa = {
        nis: req.body.nis,
        nama: req.body.nama,
        kelas: req.body.kelas,
        tanggal_lahir : req.body.tanggal_lahir,
        alamat : req.body.alamat,
        angkatan: req.body.angkatan
    }

    Siswa.create(siswa)
    .then(data=>{
        res.send({
            status: "success",
            message : "Penambahan data siswa berhasil",
            data_siswa: data });
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || "Terjadi kesalahan!"
        })
    })
}

exports.editSiswa = (req, res)=>{
    const id = req.params.id

    Siswa.update(req.body, {where : {id : id}})
    .then(data=>{
        if(data == 1){
            res.send({
                status: "success",
                message: "berhasil mengupdate data siswa",
                data_siswa: req.body
            })
        }
        else{
            res.send({
                status: "failed",
                message: "gagal menyimpan data siswa"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || "Terjadi kesalahan!"
        })
    })
}