import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { diseaseLabels } from "../constants/disease";
import { symptoms } from "../constants/symptoms";

export default function DiseasePrediction() {
  const [selectedSymptoms, setSelectedSymptoms] = useState(
    new Array(symptoms.length).fill(0)
  );
  const [prediction, setPrediction] = useState(null);

  const predict = async () => {
    console.log("loading a model");

    const model = await window.tflite.loadTFLiteModel(
      "https://raw.githubusercontent.com/lijsamuael/disease-prediction-aided-clinic-management-system/main/public/models/model.tflite"
    );
    console.log("model loaded sucessfully");

    console.log("selected ", selectedSymptoms);

    const inputTensor = window.tf.tensor(
      [selectedSymptoms],
      [1, symptoms.length]
    );

    const predictions = await model.predict(inputTensor).array();
    console.log("Predictions:", predictions);

    const predictedIndex = predictions[0].indexOf(Math.max(...predictions[0]));

    const predictedDisease = diseaseLabels[predictedIndex];

    setPrediction(predictedDisease);
    console.log("predicted disease", prediction);
  };

  const handleSymptomChange = (event, index) => {
    const updatedSymptoms = [...selectedSymptoms];
    updatedSymptoms[index] = event.target.checked ? 1 : 0;
    setSelectedSymptoms(updatedSymptoms);
    console.log("selected ", selectedSymptoms);
  };

  useEffect(() => {
    predict();
  }, []);

  return (
    <div className="p-4 bg-gray-800 pt-6 text-white rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Disease Predictor</h1>
      <h2 className="pb-4 text-lg font-bold">
        Select symptoms that you are feeling now.
      </h2>
      <div className="mb-4 grid grid-cols-4 bg-gray-700 p-4 rounded-lg space-y-4">
        {symptoms.map((symptom, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              name={symptom}
              onChange={(event) => handleSymptomChange(event, index)}
              className="mr-2"
            />
            <label className="text-lg">{symptom}</label>
          </div>
        ))}
      </div>
      <div className="flex gap-12">
        <button
          onClick={predict}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Predict Disease
        </button>
        {prediction && (
          <p className="mt-4 text-xl text-white dark:text-white font-semibold">
            The predicted disease is: {prediction}
          </p>
        )}
      </div>
    </div>
  );
}
