import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const WorkerSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, lowercase: true, required: true },
    password: { type: String, required: true },
    Address: [
      { details: { type: String }, for: { type: String }},
    ],
    PhoneNumber: [{ type: Number, required: true }],
    Nic: { type: String, required: true,unique: true },
    ProfilePic: {type:mongoose.Types.ObjectId,ref:"Image"},
    HourlyRate: { type: Number, required: true },
    WorkCategory:[{ type: String, required: true }],
    ExtraSkill: {type:String}
  },
  {
    Certification:{type:mongoose.Types.ObjectId, ref:"Image"}

  },
  {
    timestamps: true,
  }
);

// generateJwtToken statics AND method 
WorkerSchema.methods.generateJwtToken = function(){
  return jwt.sign({worker:this._id.toString()},"WorkForce");
}

//if Worker already exit they cant Signup

WorkerSchema.statics.findByEmailAndNic = async({email, Nic})=>{
  const checkWorkerByEmail = await WorkerModel.findOne({email});
  const checkWorkerByPhone = await WorkerModel.findOne({Nic});

  if(checkWorkerByEmail || checkWorkerByPhone ){
      throw new Error ("Worker already exists");
  }
  return false;
};



// sign in if Worker enter Wrong password or email

WorkerSchema.statics.findByEmailAndPassword = async({email, password})=>{

  const Worker= await WorkerModel.findOne({email});
  if(!Worker) throw new Error("Worker does not exists!!");
  // const passwordMatch = await WorkerModel.findOne({password});
  // if(!passwordMatch) throw new Error("password Invalid");
  const doesPasswordMatch= await bcrypt.compare(password, Worker.password);
   if(!doesPasswordMatch) throw new Error("invalid password !!!");
  return Worker;
  
};


// PASSWORD HASH FUNCTIONALLY

WorkerSchema.pre("save",function(next){
  const worker = this;

  //password is modified

  if(!worker.isModified("password")) return next();

  //generate bcrypt
  bcrypt.genSalt(8,(error, salt)=>{
      if(error) return next(error);

  // hash the password
      bcrypt.hash(worker.password, salt,(error,hash)=>{
          if(error) return next(error);
          
  // assign hashed password
          worker.password = hash;
          return next();
      })
  })
})




export const WorkerModel = mongoose.model("Worker", WorkerSchema);