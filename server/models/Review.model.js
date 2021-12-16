const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
    comment: { type: String, required: true },
    rating: { type: String, enum: ['1','2', '3', '4', '5'], required: true },
    game: { type: Schema.Types.ObjectId, ref: 'Game', required:true },
    owner: { type: Schema.Types.ObjectId, ref: "User" }
});

const Review = model("Review", reviewSchema);

module.exports = Review;