import express from "express";
import {
  getImagens,
  addImagem,
  deleteImagem,
} from "../controlles/carrosselController.js";

const router = express.Router();

router.get("/", getImagens);
router.post("/", addImagem);
router.delete("/:id", deleteImagem);

export default router;
