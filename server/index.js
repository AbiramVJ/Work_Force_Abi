// modules
import express from "express";
import cors from "cors";
import passport from "passport";
import helmet from "helmet";

//database connection
import ConnectDB from "./Database/Connection.js";

//google authentication
import googleAutheConfig from "./config/google.config.js"





// module OF Auth API
import AuthUser from "./API/Auth/User/index.js";
import AuthWorker from "./API/Auth/Worker/index.js";


//Module of APIs
import User from "./API/User/index.js";
import Worker from "./API/Worker/index.js"
import Image from "./API/Image/index.js"
import Review from "./API/Review/index.js"




//use
const Worker_Force = express();
Worker_Force.use(cors());
Worker_Force.use(helmet());
Worker_Force.use(express.json());
Worker_Force.use(passport.initialize());

// passport Config
googleAutheConfig(passport);





//Authentication APIs
Worker_Force.use("/auth",AuthUser);
Worker_Force.use("/auth",AuthWorker);



//API Routes//application routes
Worker_Force.use("/user",User);
Worker_Force.use("/worker",Worker);
Worker_Force.use("/image",Image);
Worker_Force.use("/review",Review);



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