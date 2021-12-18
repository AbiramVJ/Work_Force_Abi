import mongoose from "mongoose";

const WorkerSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, lowercase: true, unique: true, required: true },
    password: { type: String, required: true },
    Address: [
      { details: { type: String }, for: { type: String }, required: true },
    ],
    PhoneNumber: [{ type: Number, required: true }],
    Nic: { type: String, required: true },
    ProfilePic: {type:mongoose.Types.ObjectId,ref:"Image"},
    HourlyRate: { type: Number, required: true },
    WorkCategory: { type: String, required: true },
    ExtraSkill: {type:String}
  },
  {
    Certification:{type:mongoose.Types.ObjectId, ref:"Image"}

  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("Worker", WorkerSchema);