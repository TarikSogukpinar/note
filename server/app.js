import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import colors from "colors";
import initCors from "./helpers/cors/cors.js";
import rateLimit from "./helpers/limiter/limiter.js";
import connectionDatabase from "./helpers/connectionDatabase/connectDatabase.js";
import { initRoutes } from "./routes/index.routes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
connectionDatabase();
app.use(rateLimit);
initCors(app);
initRoutes(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running PORT : ${PORT}`.yellow.yellow);
});
