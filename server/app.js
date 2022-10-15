import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import colors from "colors";
import initCors from "./helpers/cors/cors.js";
import initLimit from "./helpers/limiter/limiter.js";
import connectionDatabase from "./helpers/connectionDatabase/connectDatabase.js";
import { initRoutes } from "./routes/index.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(mongoSanitize());
connectionDatabase();
initLimit(app);
initCors(app);
initRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running PORT : ${PORT}`.yellow.yellow);
});
