const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    role: {
      type: String,
      enum: ['USER', 'ADMIN', 'CREATOR', 'VERIFIED'],
      default: 'USER',
      required: true
    },
    email: {type: String, unique: true, required: true},
    image: String,
    favs: [{ type: Schema.Types.ObjectId, ref: 'Game' }]
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;


