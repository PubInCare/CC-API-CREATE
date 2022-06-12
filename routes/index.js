'use strict'
const express = require('express')
const router = express()
const auth=require('./authRoutes')
const profile=require('./profileRoutes')
const pengadaans=require('./pengadaanRoutes')
const perbaikans=require('./perbaikanRoutes')
router.get(`/api/`, (_req, res) => {
  res.json({
    "message": "Welcome to restfullapi"
  })
})
router.use(auth)
router.use(profile)
router.use(pengadaans)
router.use(perbaikans)

module.exports = router