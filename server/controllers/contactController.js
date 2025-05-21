import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

export const sendContact = async (req, res) => {
  const saved = await Contact.create(req.body);

  /* optional: email notification */
  // const transporter = nodemailer.createTransport({ /* SMTP config */ });
  // await transporter.sendMail({
  //   from: '"Digitornix" <no-reply@digitornix.com>',
  //   to: "admin@digitornix.com",
  //   subject: "New Contact Message",
  //   text: `${saved.name} (${saved.email}) says: ${saved.message}`,
  // });

  res.status(201).json({ message: "Message received" });
};

export const getAllContacts = async (_req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json(contacts);
};
