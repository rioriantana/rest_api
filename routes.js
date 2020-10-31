module.exports = app => {
    const siswa = require("./app/controllers/siswa.controller");

    var router = require("express").Router();

    //END POINT API

    router.get("/siswa", siswa.findAll);

    router.get("/siswa/findByNama/:query", siswa.findByNama);

    router.get("/siswa/findByNis/:query", siswa.findByNis);

    router.get("/siswa/findByAlamat/:query", siswa.findByAlamat);

    router.post("/siswa/addSiswa", siswa.addSiswa);

    router.put("/siswa/editSiswa/:id", siswa.editSiswa);

    app.use('/api', router);
}