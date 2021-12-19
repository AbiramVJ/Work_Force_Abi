import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, lowercase: true, required: true },
    password: { type: String,},
    address: [
      { details: { type: String }, for: { type: String },  },
    ],
    phoneNumber: [{ type: Number, required:true}],
    nic: { type: String, unique: true,},
    profileImage: {type:mongoose.Types.ObjectId, ref:"Images"},
  },
  
);



// generateJwtToken statics AND method 
UserSchema.methods.generateJwtToken = function(){
  return jwt.sign({user:this._id.toString()},"WorkForce");
}

//if user already exit they cant Signup

UserSchema.statics.findByEmailAndPhone = async({email, phoneNumber})=>{
  const checkUserByEmail = await UserModel.findOne({email});
  const checkUserByPhone = await UserModel.findOne({phoneNumber});

  if(checkUserByEmail || checkUserByPhone ){
      throw new Error ("user alredy exists");
  }
  return false;
};



// sign in if user enter Wrong password or email

UserSchema.statics.findByEmailAndPassword = async({email, password})=>{

  const user= await UserModel.findOne({email});
  if(!user) throw new Error("user does not exists!!");
  // const passwordMatch = await UserModel.findOne({password});
  // if(!passwordMatch) throw new Error("password Invalid");
  const doesPasswordMatch= await bcrypt.compare(password, user.password);
   if(!doesPasswordMatch) throw new Error("invalid password !!!");
  return user;
  
};


// PASSWORD HASH FUNCTIONALLY

UserSchema.pre("save",function(next){
  const user = this;

  //password is modified

  if(!user.isModified("password")) return next();

  //generate bcrypt
  bcrypt.genSalt(8,(error, salt)=>{
      if(error) return next(error);

  // hash the password
      bcrypt.hash(user.password, salt,(error,hash)=>{
          if(error) return next(error);
          
  // assign hashed password
          user.password = hash;
          return next();
      })
  })
})


export const UserModel = mongoose.model("users", UserSchema);
