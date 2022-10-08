const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: [true, 'Email is already in use'],
      lowercase: true,
      trim: true
    },
    passwordHash: {
      type: String,
      required: [true, 'Password is required.']
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
