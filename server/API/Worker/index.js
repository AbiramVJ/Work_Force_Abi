import express from 'express';
//import { get } from 'express/lib/response';
//import res from 'express/lib/response';
const Router = express.Router();


// database
import {WorkerModel} from "../../Database/Worker/index.js";


/**
 * Router    /_:id
 * Des        get Worker according to ID
 * Params     _id
 * access     public
 * method     PUT
 */

Router.get("/:_id", async(req,res)=>{
    try{
        const {_id}=req.params;
        const getWorker = await WorkerModel.findById(_id);

        if(!getWorker){
            res.json(404).json({worker:"Worker Not found"});
        }
        return res.status(200).json({worker:getWorker})

    }catch(error){
        return res.status(500).json({error:error.message});
    }
});

/**
 * Router    /:_id/delete
 * Des        Delete user Data
 * Params     _id
 * access     public
 * method     GET
 */

Router.delete("/delete/:id",async(req,res)=>{
    
    try{
        const{id}= req.params;
        const getWorker = await WorkerModel.findById(id);
        if(!getWorker){
           return res.status(404).json({message:"Worker Not found "});          
        }

        const deleteWorker= await WorkerModel.findByIdAndDelete({_id:id});
        return res.status(200).json({worker:getWorker.fullName, message:"Worker Successes fully deleted"});



    }catch(error){
        res.status(500).json({error:error.message});
    }
})

Router.put("/update/:_id",async(req,res)=>{
    try{
        const {_id}=req.params;
        const WorkerData =req.body;
        const updateData = await WorkerModel.findByIdAndUpdate({_id:_id},WorkerData,{new:true});
        return res.status(200).json({data:updateData,message:"Data was changed"});


    }catch(error){
        return res.status(500).json({error:error.message})
    }
})


export default Router;