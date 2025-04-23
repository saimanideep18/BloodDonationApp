const app = require("./app");
const dotenv = require("dotenv");
const dbConnection = require("./utils/db");
dotenv.config();

//PORT
const PORT = process.env.PORT


//server
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
    dbConnection();
})