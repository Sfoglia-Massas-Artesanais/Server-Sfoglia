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

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
