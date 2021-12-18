// modules

import express from "express";
import cors from "cors";

//database connection
import ConnectDB from "./Database/Connection.js";

// use the modules
const Worker_Force = express();


Worker_Force.use(cors());
Worker_Force.use(express.json());


// modules
import Auth from "./API/Auth/index.js";

//application routes
//Worker_Force.use("/auth",Auth);
Worker_Force.use("/user",Auth);


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