const db = require("../database/models")
const Perbaikans=db.Perbaikans;
var express = require('express');
var router = express.Router();
const Validator = require("fastest-validator");
const v = new Validator();


//GET
router.get("/api/perbaikan", async (req, res, next) => {
    const find = await Perbaikans.findAll();
    return res.json({
      status: 200,
      message: "Success get all data",
      data: Perbaikans,
    });
  });
//POST
router.post("/api/perbaikan", async (req, res) => {
    const schema = {
      nama_fasilitas: "string",
      jumlah_fasilitas: "string",
      kondisi_fasilitas: "string",
      penjelasan: "string",
      dokumentasi_bukti: "string"
    };
    const validate = v.validate(req.body, schema);
    if (validate.length) {
      return res
      .status(400)
      .json(validate);
    }
    const add = await Perbaikans.create(req.body);
      res.json({
      status: 200,
      message: "Success create data",
      data: Perbaikans,
    });
});

module.exports = router;
