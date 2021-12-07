const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    role: {
      type: String,
      enum: ['User', 'Admin', 'Creator', 'Verified'], //creator y verified lo mismo
      default: 'User'
    },
    email: {type: String, unique: true, required: true},
    image: String,
    favs: [{ type: Schema.Types.ObjectId, ref: 'Game' }]
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;


