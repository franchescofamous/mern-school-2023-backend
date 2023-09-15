const express = require("express");
const router = express.Router();
const coursCtrles = require("../controllers/coursControllers");

router.post("/add", coursCtrles.addCours);
router.get("/select/:id", coursCtrles.selectOneCours);

module.exports = router;
