import expres from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import colors from "colors";
import initCors from "./helpers/cors/cors.js"
import rateLimit from "./helpers/limiter/limiter.js"
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = expres();
app.use(expres.json());
app.use(helmet());
app.use(rateLimit);
initCors(app);

app.use('/auth',authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running PORT : ${PORT}`.yellow.yellow);
});
