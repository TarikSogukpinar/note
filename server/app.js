import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import colors from "colors";
import initCors from "./helpers/cors/cors.js";
import rateLimit from "./helpers/limiter/limiter.js";
import authRoutes from "./routes/authRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";
import connectionDatabase from "./helpers/connectionDatabase/connectDatabase.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(rateLimit);
app.use(cors());
// initCors(app);
connectionDatabase();

app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running PORT : ${PORT}`.yellow.yellow);
});
