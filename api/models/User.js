const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },
    displayName: { type: String, default: "Anonymous" },
    roles: { type: [String], default: ["user"] },
    isVerified: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  },
  {
    toJSON: {
      virtuals: true,
      transform(_, ret) {
        delete ret.password;
        return ret;
      },
    },
    toObject: { virtuals: true },
  },
);

module.exports = mongoose.model("User", userSchema);
