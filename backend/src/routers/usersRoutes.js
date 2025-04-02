const express = require("express");
const { getTopUsers } = require("../controllers/usersController");

const router = express.Router();
router.get("/users", getTopUsers);

module.exports = router;
