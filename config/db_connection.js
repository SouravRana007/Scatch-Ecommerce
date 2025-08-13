import mongoose from "mongoose";
import config from "config";
import debug from "debug";

const log = debug("development:mongoose");

// log("This will only show if DEBUG=development:mongoose is set");
export const connectDB = async () => {
  try {
    await mongoose.connect(`${config.get("MONGODB_URI")}/scatch`);
    log("MongoDB connected successfully");
  } catch (err) {
    log("❌ MongoDB connection failed:", err);
  }
};
