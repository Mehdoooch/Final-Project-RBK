// const db = require("../orm/Models/index.js")
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const getAllUser = async (req, res) => {
//     try {
//         const result = await db.User.findAll({})
//         res.status(200).send(result);
//     }
//     catch (error) {
//         console.log(error)
//         res.status(500).send(error)
//     }
// }

// const registerUser = async (req, res) => {
//     try {
//         const { username, email, password, role } = req.body;  // Accept role as an optional parameter
//         // Check if the email exists
//         const userExists = await db.User.findOne({
//             where: { email }
//         });
//         if (userExists) {
//             return res.status(400).send('Email is already associated with an account');
//         }

//         // Create user with default role if not specified
//         await db.User.create({
//             username,
//             email,
//             password: await bcrypt.hash(password, 15),
//             role: role || 'user',// Default to 'user' role if not provided
//         });
//         return res.status(200).send('Registration successful');
//     } catch (err) {
//         return res.status(500).send('Error in registering user');
//     }
// }



// // Middeleware finction check user roles

// const isAdmin = (req, res, next) => {
//     // Assuming you store user info in the token payload
//     const userRole = req.user.role; // Make sure to extract user info from token in a previous middleware
//     if (userRole === 'admin') {
//         next(); // User is admin, proceed to the next middleware or route handler
//     } else {
//         return res.status(403).send('Access denied: Admins only');
//     }
// };




// const signInUser = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Check if the email exists in the database
//         const user = await db.User.findOne({
//             where: { email }
//         });

//         if (!user) {
//             return res.status(404).json('Email not found');
//         }

//         // Verify the password
//         const passwordValid = await bcrypt.compare(password, user.password);
//         if (!passwordValid) {
//             return res.status(404).json('Incorrect email and password combination');
//         }

//         // Generate JWT token
//         const token = jwt.sign(
//             { id: user.id, role: user.role },
//             process.env.JWT_SECRET,
//             {
//                 expiresIn: process.env.JWT_REFRESH_EXPIRATION || '1h' // Default to 1 hour if not set
//             }
//         );

//         // Send successful response with user info and token
//         res.status(200).send({
//             id: user.id,
//             username: user.username,
//             email: user.email,
//             accessToken: token,
//         });
//     } catch (err) {
//         // Log the error for debugging
//         console.log(err);
//         return res.status(500).send('Sign in error');
//     }
// };





// module.exports = { getAllUser, registerUser, isAdmin, signInUser }