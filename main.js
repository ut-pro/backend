import express from "express";
import dishRouter from "./routes/dishes.route.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use("/api/dishes", dishRouter);

const port = 3000;

app.listen(port, async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://utkarshsingh144493:Ew9DyI2WSeu4kpjB@ut-pro.mcagv.mongodb.net/inventory?retryWrites=true&w=majority"
    );
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
  }
  console.log(`Server is running on http://localhost:${port}`);
});
