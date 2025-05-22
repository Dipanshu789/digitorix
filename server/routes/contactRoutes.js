import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  sendContact,
  getAllContacts,
} from "../controllers/contactController.js";

const router = express.Router();

router.post("/", sendContact);
router.get("/all", protect, getAllContacts);

export default router;
