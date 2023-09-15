const express = require("express");
const studentCtrl = require("../controllers/studentController");

const router = express.Router();

router.post("/signup", studentCtrl.signup);
router.post("/login", studentCtrl.login);

module.exports = router;
