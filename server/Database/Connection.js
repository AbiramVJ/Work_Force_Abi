import  mongoose  from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongoDB =process.env.MONGO_URL;



export default async()=>{
    return mongoose.connect( mongoDB, { 
         useNewUrlParser: true,
         useUnifiedTopology: true,
         
        });
  
}


