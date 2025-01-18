import express from "express";
import dishRouter from "./routes/dishes.route.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/dishes", dishRouter);

const port = 3000;

app.listen(port, async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/inventory");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
  console.log(`Server is running on http://localhost:${port}`);
});
