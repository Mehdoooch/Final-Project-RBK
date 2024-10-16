const router = require("express").Router();
const { signUp, logIn, updatePassword } = require("../controllers/signup");

router.post("/signUp", signUp);
router.post("/logIn", logIn);
router.put("/updatePassword/:userid", updatePassword);

module.exports = router;
