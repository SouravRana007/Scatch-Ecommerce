import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  image: String,
  name: String,
  price: Number,
  discount: {
    type: Number,
    default: 0,
  },
  //   isadmin: Boolean,
  bgcolor: {
    type: String,
    default: [],
  },
  panelcolor: String,
  textcolor: String,
});
export const productModel = mongoose.model("product", userSchema);
