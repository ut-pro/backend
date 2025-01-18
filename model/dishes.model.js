import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
    dishName: {
        type: String,
        required: true,
    },
    items: [
        // {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "Item",
        // }
    ],
    imgURL: {
        type: String,
        required: true
    }
});

export const Dish = mongoose.model("Dish", dishSchema);