const router = require("express").Router();
const {getAllUsers,getOneUser,addUser,updateUser,deleteUser} = require("../controllers/userController.js")

router.get("/getAll", getAllUsers);
router.get("/getOne/:id", getOneUser);
router.post("/add", addUser);
//router.post("/:id/favList", addBookToList);
//router.get("/:id/favList", getBooksFromList);
//router.delete("/:userId/favList/:bookId", deleteBookFromList);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;