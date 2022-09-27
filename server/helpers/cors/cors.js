import cors from "cors";

const initCors = (app) => {
  app.use(
    cors({
      origin: [
        `http://localhost:${process.env.HOST}`,
        `https://localhost:${process.env.HOST}`
      ],
      methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
      credentials: true
    })
  );
};

export default initCors;
