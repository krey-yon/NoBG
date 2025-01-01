import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};

export default connectDb;
