import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
  fullname: String,
  email: {
    required: true,
    unique: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },

  products: {
    type: Array,
    default: [],
  },
  picture: String,
  gstin: Number,
});
export const ownerModel = mongoose.model("owner", ownerSchema);
