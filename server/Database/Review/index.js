import Mongoose from "mongoose";

const ReviewSchema = new Mongoose.Schema({
    Worker:{type:Mongoose.Types.ObjectId, ref:"Worker"},
    User:{type:Mongoose.Types.ObjectId, ref:"User"},
    Rating:{type:String, required:true},
    ReviewText:{type:String,required:true},


},{
    timestamps:true,
});
export const ReviewModel = Mongoose.model("Review",ReviewSchema);
