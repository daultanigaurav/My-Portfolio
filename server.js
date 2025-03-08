const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config(); // To load environment variables from .env file

const app = express();
const port = 5000;

app.use(express.json()); // Allows parsing of JSON bodies
app.use(cors()); // Enable CORS for all routes

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL,
    subject: `Message from ${name} via Contact Form`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: "Failed to send message." });
    }
    res.status(200).json({ message: "Message sent successfully!" });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
