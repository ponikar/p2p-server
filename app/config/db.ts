import mongo from "mongoose";

export const connectDB = async () => {
  try {
    await mongo.connect("mongodb://localhost:27017/p2p", {
      useNewUrlParser: true,
    });
    console.log("DB CONNECTED");
  } catch (e) {
    console.log("FAILED TO CONNECT", e.message);
  }
};
