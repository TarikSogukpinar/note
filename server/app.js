import expres from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import colors from "colors";

dotenv.config();
const app = expres();
app.use(expres.json());
app.use(helmet());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running PORT : ${PORT}`.yellow.yellow);
});
