import express from "express";
import { ownerModel } from "../models/ownermodel.js";
const router = express.Router();

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    try {
      const { fullname, email, password } = req.body;

      // Check for existing owners
      const owners = await ownerModel.find();
      if (owners.length > 0) {
        return res
          .status(403)
          .send("You don’t have permission to create an owner");
      }

      // Create owner
      const owner = await ownerModel.create({ fullname, email, password });

      res.status(201).send(owner);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
}

router.get("/", async (req, res) => {
  res.send("hellllo");
});
export default router;
