const db = require("../database/models")
const Pengadaans=db.Pengadaans;
var express = require('express');
var router = express.Router();
const Validator = require("fastest-validator");
const v = new Validator();

//GET
router.get('/api/pengadaans', async (req, res, next) => {
  const search = await Pengadaans.findAll();
  return res.json({
    status: 200,
    message: "Success get all data",
    data: Pengadaans,
  });
});
//POST
router.post('/api/pengadaans', async (req, res) => {
    const schema = {
      nama_fasilitas: "string",
      jumlah_fasilitas: "string",
      penjelasan: "string",
      dokumentasi_bukti: "string"
    };
    const validate = v.validate(req.body, schema);
    if (validate.length) {
      return res
      .status(400)
      .json(validate);
    }
    const save = await Pengadaans.create(req.body);
      res.json({
      status: 200,
      message: "Success create data",
      data: Pengadaans,
    });
});

module.exports = router;
