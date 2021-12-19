// modules
import express from "express";
import cors from "cors";
import passport from "passport";

//database connection
import ConnectDB from "./Database/Connection.js";

//google authentication
import googleAutheConfig from "./config/google.config.js"

// API
import Auth from "./API/Auth/index.js";
import User from "./API/User/index.js"

//use
const Worker_Force = express();
Worker_Force.use(cors());
Worker_Force.use(express.json());
Worker_Force.use(passport.initialize());

// passport Config
googleAutheConfig(passport);



//application routes
Worker_Force.use("/auth",Auth);
Worker_Force.use("/user",User);


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