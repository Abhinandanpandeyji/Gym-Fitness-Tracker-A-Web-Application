import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  service: process.env.SMTP_SERVICE,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const mailOptions = {
  from: process.env.SMTP_MAIL,
  to: "abhinandanpan2401@gmail.com", // receiver email
  subject: "✅ Test Email from GYM App",
  text: "This is a test email. If you received it, SMTP is working!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error("❌ SMTP Test Failed:", error);
  }
  console.log("✅ Test Email Sent:", info.response);
});
