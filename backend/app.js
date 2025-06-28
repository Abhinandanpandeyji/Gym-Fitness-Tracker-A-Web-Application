import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { sendEmail } from "./utils/sendEmail.js";

// Load environment variables
config({ path: "./config.env" });

const app = express();
const router = express.Router();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Route for sending email
router.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }

  try {
    await sendEmail({
      email: "merndeveloper4@gmail.com", // where email is received
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email, // sender's email
    });

    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// Attach router
app.use(router);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`✅ Server listening at port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("🎉 Gym Fitness Tracker Backend is Running Successfully!");
});
