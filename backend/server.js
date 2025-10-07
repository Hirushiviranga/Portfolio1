import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/portfolioMessages", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

// App
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
});

// Start server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
