import express from 'express';


const Router = express.Router();


//database model

import {WorkerModel} from '../../../Database/Worker/index.js';

// validation
import { ValidatedWorkerSignin,ValidatingWorkerSignup } from '../../../validation/auth.js';

/**
 * Router    /signup
 * Des        Register new WORKER
 * Params     none
 * access     public
 * method     POST
 */

Router.post("/signup/worker",async(req,res)=>{
    try{
       // console.log("hello");
        await ValidatingWorkerSignup(req.body);
        await WorkerModel.findByEmailAndNic(req.body);
        const addWorker = await WorkerModel.create(req.body);
        const token = addWorker.generateJwtToken();
        res.status(200).json({token, message:"Worker Was Create successfully"});

    }catch(error){
        res.status(500).json({error:error.message});
    }
    

})

/**
 * Router    /signin
 * Des        USER LOGIN 
 * Params     none
 * access     public
 * method     GET
 */

 Router.get("/signin/worker", async(req,res)=>{
    try{
       //
       await  ValidatedWorkerSignin(req.body);
        const findWorker = await WorkerModel.findByEmailAndPassword(req.body);
        if(!findWorker){
            return res.status(404).json({worker:"Worker Not Found"});
        }
        const token = findWorker.generateJwtToken();
        return res.status(200).json({token,status:"successes"})

    } catch(error){
        return res.status(500).json({error: error.message});
    }
})


export default Router;