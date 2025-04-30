const express = require("express");
const { createProspect, getAllProspects, updateProspect, getOneProspect, deleteProspect} = require("../controllers/prospect");
const router = express.Router();

// ADD Prospect
router.post("/",createProspect);

// GET ALL ProspectS
router.get("/",getAllProspects);

// UPDATE Prospect
router.put("/:id",updateProspect);

// GET ONE Prospect
router.get("/find/:id",getOneProspect);

// DELETE Prospect 
router.delete("/:id",deleteProspect);

module.exports=router