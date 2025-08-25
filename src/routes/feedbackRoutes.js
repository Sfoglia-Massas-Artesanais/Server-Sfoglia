import express from "express";
import { enviarFeedback } from "../controlles/feedbackController.js";

const router = express.Router();

router.post("/", enviarFeedback);

export default router;
