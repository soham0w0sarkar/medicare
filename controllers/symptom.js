import catchAsyncError from "../middlewares/catchAsyncError.js";

export const symptom = catchAsyncError(async (req, res, next) => {
  const diseases = {
    Malaria: [
      "high fever",
      "chills and sweating",
      "headache",
      "fatigue",
      "nausea and vomiting",
      "muscle and joint pain",
      "enlarged spleen",
      "jaundice",
    ],
    Typhoid: [
      "high fever",
      "headache",
      "abdominal pain",
      "loss of appetite",
      "diarrhea or constipation",
      "weakness and fatigue",
      "sore of throat",
      "rose coloured spots on chest",
      "enlarged spleen and liver",
    ],
    Tuberculosis: [
      "persistent cough that may produce blood",
      "weight loss",
      "night sweats",
      "fever",
      "chills",
      "fatigue and weakness",
      "chest pain or discomfort",
    ],
    HIV: [
      "fever",
      "fatigue",
      "swollen lymph nodes",
      "sore throat",
      "rash",
      "headache",
      "body pain",
      "weight loss",
      "chronic diarrhea",
      "recurrent fever",
    ],
    Hepatitis: [
      "fatigue",
      "jaundice",
      "abdominal pain",
      "dark urine",
      "pale stools",
      "loss of appetite",
    ],
    Diabeties: [
      "increased thirst",
      "frequent urination",
      "weight loss",
      "fatigue",
      "blurred vision",
      "recurrent infections",
    ],
    Cholera: [
      "vomiting",
      "dehydration",
      "muscle cramps",
      "rapid heart rate",
      "electrolyte imbalance",
    ],
    Stroke: [
      "sudden numbness or weakness of the face, arm or leg",
      "sudden confusion",
      "trouble speaking vision",
      "headaches",
      "dizziness",
      "loss of balance",
    ],
    KidneyDisease: [
      "fatigue",
      "swelling of legs and ankles",
      "edema",
      "high blood pressure",
      "changes in urination",
      "persistent itching",
      "loss of appetite",
      "nausea and vomiting",
      "muscle cramps",
    ],
    Cancer: [
      "weight loss",
      "fatgue",
      "pain",
      "changes in skin",
      "persistent cough",
      "lumps and growth",
      "changes in bladder habits",
      "unexplained bleeding",
    ],
    Artherities: [
      "joint pain",
      "stiffness",
      "swelling",
      "reduced range of motion",
      "fatigue",
    ],
    Asthma: ["wheezing", "shortness of breath", "chest tightness", "coughing"],
  };
  const { symptoms } = req.body;
  const possibleDisease = [];
  for (let [disease, tsymptoms] of Object.entries(diseases)) {
    symptoms.forEach((symptom) => {
      if (tsymptoms.includes(symptom)) {
        possibleDisease.push(disease);
      }
    });
  }
  const uniqueDisease = [...new Set(possibleDisease)];
  res.status(200).json({
    status: "success",
    data: {
      diseases: uniqueDisease,
    },
  });
});
