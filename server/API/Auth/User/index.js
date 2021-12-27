import express, { json } from "express";
import passport from "passport";


// database model
import {UserModel} from "../../../Database/User/index.js";
// validation
import { ValidatedUserSignin,ValidatingUserSignup } from "../../../validation/auth.js";
// create a rotes
const Router = express.Router();

/**
 * Router    /signup
 * Des        Register new User
 * Params     none
 * access     public
 * method     POST
 */

Router.post("/user/signup", async(req,res)=>{
    try{
        await ValidatingUserSignup(req.body);
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

 Router.get("/user/signin", async(req,res)=>{
    try{
       //
       await  ValidatedUserSignin(req.body);
        const user = await UserModel.findByEmailAndPassword(req.body);
        const token = user.generateJwtToken();
        return res.status(200).json({token,status:"successes"})

    } catch(error){
        return res.status(500).json({error: error.message});
    }
})



/**
 * Router    /signin
 * Des        Google signin
 * Params     none
 * access     public
 * method     GET
 */

 Router.get("/google",passport.authenticate("google",{
    scope:[
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
    ]
}));

/**
 * Router    /google/callback
 * Des        Google signin callback
 * Params     none
 * access     public
 * method     GET
 */

 Router.get("/google/callback",passport.authenticate("google",{failureRedirect:"/"}),
 (req,res)=>{
     return res.status(200).json({token: req.session.passport.user.token, status:"success"})
 }
);



export default Router;



