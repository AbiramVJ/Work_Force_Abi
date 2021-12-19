import express from 'express';
const Router = express.Router();

// database
import {UserModel} from '../../Database/User/index.js'

/**
 * Router    /:_id
 * Des        GET user Data
 * Params     _id
 * access     public
 * method     GET
 */

Router.get("/:_id",async(req,res)=>{
    try{
        
        const{_id}= req.params;
        console.log(_id);
        const getUser = await UserModel.findById(_id);
        if(!getUser){
            return res.status(404).json({error: "user not found"});
        }
        return res.json({user:getUser});
      

    }catch(error){
        return res.status(500).json({error: error.message});

    }
});

// Router.get("/getuser/:id",async(req,res)=>{
//     try{
//        const {_id} = req.params;       
//        const getUser = UserModel.findById(_id);
//        const {fullName} = getUser;

//        if(!getUser){
//            return res.status(404).json("user not found");
//        }
//        return res.json({getUser:{fullName}});

//     }catch(error){
//         return res.status(500).json({error: error.message});

//     }
// });
Router.get("/:id/getuser/", async (req, res) => {
    try {
      const { _id } = req.params;
      const getUser = await UserModel.findById(_id);
     
  
      if (!getUser) {
        return res.status(404).json({ error: "User not found" });
      }
      const {fullName} = getUser;
      return res.json({ user:{fullName}});
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });




export default Router;
