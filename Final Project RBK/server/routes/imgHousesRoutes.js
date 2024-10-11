const router = require("express").Router();
const {getAllImages,getOneImage,addImage,deleteImage} = require("../controllers/imgHouseController.js")

router.get("/getAll", getAllImages);
router.get("/getOne/:id", getOneImage);
router.post("/add", addImage);
router.delete("/delete/:id", deleteImage);

module.exports = router;