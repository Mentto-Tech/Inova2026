import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import subscribeHandler from "./api/subscribe.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, "dist");

const app = express();

app.use(express.json());

// Keep the MailerLite call server-side so the API key is not exposed
app.all("/api/subscribe", (req, res) => subscribeHandler(req, res));

app.use(express.static(distPath));

// Catch-all for SPA routes (regex avoids path-to-regexp '*' issue)
app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const port = process.env.PORT || 4173;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${port}`);
});
