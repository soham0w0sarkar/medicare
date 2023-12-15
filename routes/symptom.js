import express from "express";
import { symptom } from "../controllers/symptom.js";

const symptomRouter = express.Router();

symptomRouter.get("/symptom", symptom);

export default symptomRouter;
