const express = require("express");
const router = express.Router();

const UsersController = require("./users.controller");

router.get("/", UsersController.getUsers);
router.post("/:user", UsersController.addUser);

module.exports = router;
