const express = require("express");
const router = express.Router();
const UserController = require("../controller/users");

router.get("/", UserController.getAllUser);
router.get("/:id", UserController.getUserById);
router.put("/:id", UserController.updateUserById);
router.post("/add", UserController.addUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
