const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required.'],
      unique: [true, 'Username is already taken.'],
      trim: true  
    },
    passwordHash: {
      type: String,
      required: [true, 'Password is required.']
    }
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
