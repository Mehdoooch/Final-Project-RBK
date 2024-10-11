const express = require('express');
const { registerUser, signInUser,getAllUser} = require('../controllers/auth.controller');
const router = express.Router();


router.get("/getAll", getAllUser);


// Registration route
router.post('/sign-up', registerUser);


// Signin route
router.post('/sign-in', signInUser);




module.exports = router;