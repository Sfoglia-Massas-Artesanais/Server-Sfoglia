import express from "express";
import cors from "cors";
import pratoRoutes from "./src/routes/pratoRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import feedbackRoutes from "./src/routes/feedbackRoutes.js";
import carrosselRoutes from "./src/routes/carrosselRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/feedback", feedbackRoutes);
app.use("/carrossel", carrosselRoutes);

// Rotas
app.use("/auth", authRoutes);
app.use("/pratos", pratoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
