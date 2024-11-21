import mongoose from "mongoose";


const PracticalSchema = new mongoose.Schema({
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true,
  },
  enroll: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Enroll", 
    },
  ],
});

const PracticalModel = mongoose.model("Practical", PracticalSchema);

export default PracticalModel;