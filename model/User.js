import mongoose from "mongoose";

// Define a new schema (structure) for the User model
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["Admin", "Teacher", "Student"],
      required: true,
    },
  });
  

  const userModel = mongoose.model("User", userSchema);
  

  export default userModel;