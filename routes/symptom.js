import express from "express";
import { symptom } from "../controllers/symptom.js";

const symptomRouter = express.Router();

symptomRouter.post("/symptom", symptom);

export default symptomRouter;
