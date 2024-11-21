import mongoose from "mongoose";


// Define the Subject schema
const SubjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const SubjectModel = mongoose.model("Subject", SubjectSchema);

export default SubjectModel;
