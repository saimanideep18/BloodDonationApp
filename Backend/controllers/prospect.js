const Prospect = require("../models/Prospect");

// CREATE DONOR

const createProspect = async(req,res)=>{
    try {
        const newProspect = Prospect(req.body);
        const Prospect = await newProspect.save();
        res.status(201).json(Prospect);
    } catch (error) {
        res.status(500).json(error);
    }
};


// GET ALL ProspectS

const getAllProspects = async(req,res)=>{
    try {
        const Prospects = await Prospect.find().sort({createdAt:-1});
        res.status(200).json(Prospects)
    } catch (error) {
        res.status(500).json(error)
    }
}

// UPDATE Prospect

const updateProspect = async(req,res)=>{
    try {
       const updateProspect = await Prospect.findByIdAndUpdate(
        req.params.id,
        {$set:req.body},
        {new:true}
       );
       res.status(201).json(updateProspect);
    } catch (error) {
        res.status(500).json(error);
    }
};

// GET ONE Prospect
const getOneProspect = async(req,res)=>{
    try {
        const prospect = await Prospect.findById(req.params.id);
        res.status(200).json(prospect);
    } catch (error) {
        res.status(500).json(error);
    }
};

// DELETE Prospect 

const deleteProspect = async(req,res)=>{
    try {
        await Prospect.findByIdAndDelete(req.params.id);
        res.status(201).json("Prospect deleted successfully");
    } catch (error) {
        res.status(500).json(error);
    }
};



module.exports={deleteProspect,getOneProspect,getAllProspects,getDonorsStats,updateProspect,createProspect}
