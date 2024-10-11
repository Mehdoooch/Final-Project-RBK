const router = require("express").Router();
const {getAllReserv,addReservation/*,deleteReservation*/} = require("../controllers/reservController.js")

router.get("/getAll", getAllReserv);
//router.get("/getOne/:id", getOneImage);
router.post("/add", addReservation);
//router.delete("/delete/:id", deleteReservation);

module.exports = router;