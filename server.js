import express from "express";
import cors from "cors";
import pratoRoutes from "./src/routes/pratoRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import feedbackRoutes from "./src/routes/feedbackRoutes.js";
import carrosselRoutes from "./src/routes/carrosselRoutes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5500",
  "http://127.0.0.1:5500/",
  "https://server-sfoglia.onrender.com",
  "https://sfoglia-massas-artesanais.github.io/Sfogliafiennos/",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("🚫 Bloqueado por CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use("/feedback", feedbackRoutes);
app.use("/carrossel", carrosselRoutes);
app.use("/auth", authRoutes);
app.use("/pratos", pratoRoutes);
app.get("/", (req, res) => {
  res.send("🍝 Sfoglia Backend rodando com sucesso!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
