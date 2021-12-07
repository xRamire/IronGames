const { Schema, model } = require("mongoose");


const reviewSchema = new Schema({

    comment: { type: String, required: true },
    rating: { type: Number, required: true },
    game: { type: Schema.Types.ObjectId, ref: 'Game', required:true }
});

const Review = model("Review", reviewSchema);

module.exports = Review;