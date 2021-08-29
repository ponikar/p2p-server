import mongo from "mongoose";

export const connectDB = async () => {
  try {
    const db_url = process.env.DATABASE_URL as string;
    await mongo.connect(db_url, {
      useNewUrlParser: true,
    });
    console.log("DB CONNECTED");
  } catch (e) {
    console.log("FAILED TO CONNECT", e.message);
  }
};
