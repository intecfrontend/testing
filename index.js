import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
const app = express()
dotenv.config()
const connect = async () => {
  try {
    await mongoose.connect(process.env.Mongo);
    console.log("Connected to mongoDB.")
  } catch (error) {
    throw error
  }
};
app.listen(8900, () => { connect(), console.log("Connected to backend!") })