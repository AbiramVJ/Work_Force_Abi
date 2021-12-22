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

/**
 * Router    /:_id/delete
 * Des        Delete user Data
 * Params     _id
 * access     public
 * method     GET
 */

Router.delete("/:_id/delete", async(req,res)=>{
  try{
    const {_id} = req.params;
    const user = await UserModel.findById(_id);
    if(!user){
      return res.json("user not found");
  }
  const deleteUser = await UserModel.deleteOne({_id:_id});
  return res.status(200).json({user:deleteUser,message:" User Successfully Deleted"});

  }catch(error){
    return res.status(500).json({error:error.message});
  }
  

});

/**
 * Router    /update
 * Des        UPDATE user data
 * Params     _id
 * access     private
 * method     PUT
 */

Router.put("/:_id/update",async(req,res)=>{
  try{
    const{_id} = req.params;

    const userData = req.body;
    
  
    const updateUserData = await UserModel.findByIdAndUpdate({_id:_id},userData,{new:true});

    return res.status(200).json({user:updateUserData});

  }catch(error){
    return res.status(500).json({error:error.message});
  }
  
})
export default Router;
