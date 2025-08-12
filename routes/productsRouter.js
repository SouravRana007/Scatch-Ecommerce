import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("hellllo products");
});
export default router;
