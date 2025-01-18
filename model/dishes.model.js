import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
    dishName: {
        type: String,
        required: true,
    },
    items: [
        
    ],
    imgURL: {
        type: String,
        required: true
    }
});

export const Dish = mongoose.model("Dish", dishSchema);