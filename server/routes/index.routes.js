import express from "express";
import loginRoutes from "./login.routes.js";
import registerRoutes from "./register.routes.js";
import noteRoutes from "./note.routes.js";
import userRoutes from "./user.routes.js";
import contactRoutes from "./contact.routes.js";

const app = express();

export function initRoutes(app) {
  app.use("/api/auth", loginRoutes);
  app.use("/api/auth", registerRoutes);
  app.use("/api/notes", noteRoutes);
  app.use("/api/user", userRoutes);
  app.use("/api/contact", contactRoutes);
  app.use("/check", (req, res) => res.json({ message: "Ok!" }));
}
