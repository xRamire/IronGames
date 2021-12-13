const { Schema, model } = require("mongoose");

const gameSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        genre: {
            type: String,
            enum: ['Adventure', 'Fighting', 'Beat\'em up', 'Shooter', 'Multiplayer', 'Sports', 'Terror', 'Racing', 'Other' ],
            required: true
        },
        creators: [{ type: String, required: true }],
        imageUrl: {type: String, required: true},
        github: { type: String, required: true },
        date: { type: Date, required: true },
        gameUrl: { type: String, required: true },
    },
    {
        timestamps: true
    }
);

const Game = model("Game", gameSchema);

module.exports = Game;
