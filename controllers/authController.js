import { userModel } from "../models/usermodel.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";
export const registerUser = async (req, res) => {
  try {
    const { fullname, email, password, contact } = req.body;
    const olduser = await userModel.findOne({ email: email });
    if (olduser) {
      //   return res.status(400).send("User already exits ");
      req.flash("error", "User already exists");
      return res.redirect("/"); // The e
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      fullname,
      email,
      password: hashedPassword,
      contact,
    });
    const token = generateToken(user);
    res.cookie("token", token);
    // return res.status(201).json({
    //   message: "User created ",
    //   user: {
    //     id: user._id,
    //     fullname: user.fullname,
    //     email: user.email,
    //   },
    // });
    req.flash("success", "User created successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// login

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(400).send("Email or password incorrect ");
    }
    const passOk = await bcrypt.compare(password, user.password);
    if (!passOk) {
      return res.status(400).send("Password is incorrect");
    }
    const token = generateToken(user._id);
    res.cookie("token", token);
    // return res.status(201).send("Login successful");
    req.flash("success", "login successfull");
    return res.redirect("/shop");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
