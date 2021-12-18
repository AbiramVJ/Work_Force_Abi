import  Mongoose from "mongoose";

const ImageSchema = new Mongoose.Schema({
    Images:[{location:{type:String, require:true}}]


});
export const ImageModel = Mongoose.model("Image",ImageSchema);