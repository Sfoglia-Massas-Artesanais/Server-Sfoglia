import express from "express";
import {
  getPratos,
  getPrato,
  createPrato,
  updatePrato,
  deletePrato,
} from "../controlles/pratoControlles.js";

import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getPratos);
router.get("/:id", getPrato);
router.post("/", authMiddleware, createPrato);
router.put("/:id", authMiddleware, updatePrato);
router.delete("/:id", authMiddleware, deletePrato);

export default router;
