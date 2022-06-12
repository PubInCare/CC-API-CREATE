require('dotenv').config()
const jwt = require('jsonwebtoken')
const db = require("../database/models")
const daftarhitams = db.daftarhitams;

const passingToken = async (req, res, next) => {
    // cek jika header ada param authorization standar bearer
    if (req.headers.authorization) {
        // mengambil Bearer token dari header
        const token = req.headers.authorization.split(' ')[1]

        /* 
        proses pengecekan token apakah token yang dikirim itu masuk daftar
        blacklist atau tidak ???
        */
        const checkdaftar = await daftarhitams.findOne({ where: { tokenAuth } });
        if (checkdaftar) {
          return res.status(401).send({
            auth: false,
            message: 'Your token is blacklist, please login again'
          })
        }
        
        /* 
            proses verifikasi token dengan secret key yang kita buat
        */
        jwt.verify(token, process.env.JWT_KEY, (err) => {
            if (err) {
                return res.status(500).send({ auth: false, message: err })
            }
            next()
        })
    } else {
        res.status(401).send({
            auth: false,
            message: 'Token required'
        })
    }
}

module.exports = { passingToken }