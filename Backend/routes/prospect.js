const express = require("express");
const { createProspect, getAllProspects, updateDonor, getOneDonor, deleteDonor, getDonorsStats } = require("../controllers/donor");
const router = express.Router();

// ADD Prospect
router.post("/",createProspect);

// GET ALL ProspectS
router.get("/",getAllProspect);

// UPDATE Prospect
router.put("/:id",updateProspect);

// GET ONE Prospect
router.get("/find/:id",getOneProspect);

// DELETE Prospect 
router.delete("/:id",deleteProspect);

// Prospect STATS
router.get("/stats",getProspectsStats);


module.exports=router