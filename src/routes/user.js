// Modules
const router = require('express').Router();

// Controllers
const { user } = require('../controllers');

// Middlewares



router.get('/get-profile', user.getProfile);





module.exports = router;