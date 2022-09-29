import rateLimit from "express-rate-limit";

const initLimit = (app) => {
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100,
      standardHeaders: true,
      legacyHeaders: false
    })
  );
};

export default initLimit;
