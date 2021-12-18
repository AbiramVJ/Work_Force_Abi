import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, lowercase: true, required: true },
    password: { type: String, required: true },
    address: [
      { details: { type: String }, for: { type: String },  },
    ],
    phoneNumber: [{ type: Number, }],
    nic: { type: String, },
    profilePic: {type:mongoose.Types.ObjectId, ref:"Images"},
  },
  
);


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


  const passwordMatch = await UserModel.findOne({password});
  if(!passwordMatch) throw new Error("password Invalid");

  

  // const doesPasswordMatch = await password.compare(password, user.password);

  // if(!doesPasswordMatch) throw new Error("invalid password !!!");
  return user;
  
};


export const UserModel = mongoose.model("users", UserSchema);
