import cors from "cors";

const initCors = (app) => {
  app.use(
    cors({
      allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "X-Access-Token",
        "Authorization"
      ],
      origin: [`http://${process.env.HOST}`, `https://${process.env.HOST}`],
      methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
      credentials: true
    })
  );
};

export default initCors;
