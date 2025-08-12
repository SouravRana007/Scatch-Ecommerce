import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
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
  cart: {
    type: Array,
    default: [],
  },
  isadmin: Boolean,
  orders: {
    type: Array,
    default: [],
  },
  contact: Number,
  picture: String,
});
export const userModel = mongoose.model("user", userSchema);
