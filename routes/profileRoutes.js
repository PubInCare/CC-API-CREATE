'use strict'
const express = require('express')
const profile = require('../controllers/profileController')
const router = express.Router()

router.put('/api/v1/profile/:id',profile.updateProfile)
router.delete('/api/v1/profile/:id',profile.destroyProfile)

module.exports = router 