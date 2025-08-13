import jwt from "jsonwebtoken";
import { userModel } from "../models/usermodel.js";
export const isLoggedin = async (req, res, next) => {
  if (!req.cookies.token) {
    req.flash("error", "you need to login first");
  }
  try {
    const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    const user = await userModel
      .findOne({ email: decoded.email })
      .select("-password");
    req.user = user;
    next();
  } catch (error) {
    req.flash("error", "something went wrong");
    res.redirect("/");
  }
};
