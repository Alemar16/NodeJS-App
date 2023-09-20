import { Router } from "express";
import sendEmail from "../email/sendEmail.js";
import { config } from "dotenv";

config();
const recipientEmail = process.env.RECIPIENT_EMAIL;
const senderEmail = process.env.SENDER_EMAIL;

const contactRouter = Router();

contactRouter.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  // Realiza validaciones aquí
  if (!name || !email || !message) {
    return res.status(400).send("Please fill in all fields.");
  }

  if (name.length < 2 || name.length > 50) {
    return res.status(400).send("Name should be between 2 and 50 characters.");
  }

  try {
    await sendEmail(
      recipientEmail,
      senderEmail,
      "Contact Message",
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );

    const successMessage = "Email sent successfully";
    console.log(successMessage);

    res.redirect(`/contact?message=${successMessage}`);
  } catch (error) {
    console.error("Error sending email:", error);
    const errorMessage = "There was an error sending the email";

    res.redirect(`/contact?errorMessage=${errorMessage}`);
  }
});

export default contactRouter;
