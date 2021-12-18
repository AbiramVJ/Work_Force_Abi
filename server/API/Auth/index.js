import express, { json } from "express";

// database model
import {UserModel} from "../../Database/User/index.js";
const Router = express.Router();

/**
 * Router    /signup
 * Des        Register new User
 * Params     none
 * access     public
 * method     POST
 */

Router.post("/signup", async(req,res)=>{
    try{
        await UserModel.findByEmailAndPhone(req.body);
        const addNewUser = await UserModel.create(req.body);
        return res.json({userAdded:addNewUser,message:"User was Added"});

    }catch(error){
        return res.status(500).json({error: error.message});

    }
});

/**
 * Router    /signin
 * Des        USER LOGIN 
 * Params     none
 * access     public
 * method     GET
 */

 Router.get("/signin", async(req,res)=>{
    try{
        console.log(req);

        await UserModel.findByEmailAndPassword(req.body);
        return res.status(200).json({status:"successes"})

    } catch(error){
        return res.status(500).json({error: error.message});
    }
})


export default Router;