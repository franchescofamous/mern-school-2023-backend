const express = require("express");
const filiereCtrl = require("../controllers/filiereController");

const router = express.Router();

router.get("/select", filiereCtrl.getAllFiliere);
router.post("/specific", filiereCtrl.getSpecificFiliere);
router.post("/add", filiereCtrl.addFiliere);

module.exports = router;
