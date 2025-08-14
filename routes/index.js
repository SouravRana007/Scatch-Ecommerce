import express from "express";
import { isLoggedin } from "../middlewares/isLoggedin.js";
const router = express.Router();
router.get("/", (req, res) => {
  let error = req.flash("error");
  res.render("index", { error });
});
router.get("/shop", isLoggedin, (req, res) => {
  res.render("shop");
});

export default router;
