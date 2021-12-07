const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const gameSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        genre: {
            type: String,
            enum: ['Adventure', 'Fighting', 'Beat\'em up', 'Shooter', 'Multiplayer', 'Sports', 'Terror', 'Racing', 'Other' ],
            required: true
        },
        creators: [{ type: String }],
        imageUrl: String,
        github: String, 
        date: Date,
        gameUrl: String




    },
    {
        timestamps: true

    }

);

const Game = model("Game", gameSchema);

module.exports = Game;
