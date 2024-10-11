const router = require("express").Router();
const {getAllHouses,getOneHouse,addHouse,updateHouse,deleteHouse} = require("../controllers/houseController.js")

router.get("/getAll", getAllHouses);
router.get("/getOne/:id", getOneHouse);
router.post("/add", addHouse);
router.put("/update/:id", updateHouse);
router.delete("/delete/:id", deleteHouse);

module.exports = router;