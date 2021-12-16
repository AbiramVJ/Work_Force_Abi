// modules

import express from "express";
import cors from "cors";

//database connection
import ConnectDB from "./Database/Connection.js";

// use the modules
const Worker_Force = express();
Worker_Force.use(cors());

// Server connection portS
Worker_Force.listen(4000, () => {

    ConnectDB()
    .then(()=>{
      console.log("CONNECTED SUCCESFULLY");
  
    })
    .catch((error)=>{
      console.log("server is running but database not conected");
      console.log(error);
      
  
  
  
    })
    
  });