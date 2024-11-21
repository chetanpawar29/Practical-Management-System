import express from "express";
import dotenv from "dotenv";
import router from "../routers/feedbackRouter.js";
import dbConnect from "../config/database.js";


dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;  


app.use(express.urlencoded({ extended: true })); // For form data
app.use(express.json());

app.post("/admin", (req, res) => {
  console.log(req.body);
})

app.use("/api/v1", router);

dbConnect();

app.get("/",(req, res) => {
  res.json({
    "success": true,
    "message": "server running successfully!",
  })
})

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
