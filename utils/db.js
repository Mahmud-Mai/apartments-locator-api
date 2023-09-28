import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to db");
  } catch (error) {
    if (error.code === "ESERVFAIL") {
      console.log(`Connection to Mongo DB failed. Chech your Network!!!`);
    } else console.log(`🚀 ~ connect ~ error:`, error);
  }
};
