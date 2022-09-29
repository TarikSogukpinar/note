import express from "express";
import loginRoutes from "./login.routes.js";
import registerRoutes from "./register.routes.js";
import noteRoutes from "./note.routes.js";

const app = express();

export function initRoutes(app) {
  app.use("/api/auth", loginRoutes);
  app.use("/api/auth", registerRoutes);
  app.use("/api/notes", noteRoutes);
  app.use("/check", (req, res) => res.json({ message: "Ok!" }));
}
