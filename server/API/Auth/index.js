import express, { json } from "express";


// database model
import {UserModel} from "../../Database/User/index.js";
// validation
import { ValidatedSignin,ValidatingSignup } from "../../validation/auth.js";
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
        await ValidatingSignup(req.body);
        await UserModel.findByEmailAndPhone(req.body);
        const addNewUser = await UserModel.create(req.body);
        const token = addNewUser.generateJwtToken();
        return res.status(200).json({token, status:"user was add success"});
        //return res.json({userAdded:addNewUser,message:"User was Added"});

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
       //
        const user = await UserModel.findByEmailAndPassword(req.body);
        const token = user.generateJwtToken();
        return res.status(200).json({token,status:"successes"})

    } catch(error){
        return res.status(500).json({error: error.message});
    }
})


export default Router;