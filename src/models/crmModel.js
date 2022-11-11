import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const BookSchema = new Schema({
  id:{
    type:String
  },
  titre:{
    type:String,
    required:'Enter title'
  },
  auteur:{
    type:String,
    required:'Enter author'
  },
});