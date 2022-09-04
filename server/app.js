import expres from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import colors from "colors";
import initCors from "./helpers/cors/cors.js"

dotenv.config();
const app = expres();
app.use(expres.json());
app.use(helmet());
initCors(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running PORT : ${PORT}`.yellow.yellow);
});
