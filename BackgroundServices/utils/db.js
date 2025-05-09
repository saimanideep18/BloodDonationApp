const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

//DB
const DB = process.env.DB;

const dbConnection = async() =>{
    try {
       await mongoose.connect(DB).then(()=>{
            console.log("Database connected successfully")
        })
    } catch (error) {
        console.log(error);
        setTimeout(dbConnection,8000)
    }
} 

module.exports=dbConnection;