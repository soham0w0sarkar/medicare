import express from "express";
import { config } from "dotenv";
import cors from "cors";

cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
});

config({
  path: "./config/config.env",
});

const app = express();

app.use(express.json());

import symptomRouter from "./routes/symptom.js";

app.use(symptomRouter);

export default app;
