import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
// import cookieParser from "cookie-parser";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("hellllo rana ji");
});
router.post("/register", registerUser);
router.post("/login", loginUser);
export default router;
