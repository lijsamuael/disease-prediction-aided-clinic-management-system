import React, { useEffect, useState } from "react";
import { diseaseLabels } from "../constants/disease";
import { symptoms } from "../constants/symptoms";
import { diseaseMedications } from "../constants/medications";
import { Link } from "react-router-dom";
import LoginIcon from "./icons/login";

export default function DiseasePrediction() {
  const [selectedSymptoms, setSelectedSymptoms] = useState(
    new Array(symptoms.length).fill(0)
  );
  const [prediction, setPrediction] = useState(null);
  const [medications, setMedications] = useState([]);

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

    // Find medications for the predicted disease
    const predictedMedications = diseaseMedications.find(
      (item) => item.disease === predictedDisease
    );
    console.log("medications", diseaseMedications);
    console.log("predicted medications", predictedMedications);
    if (predictedMedications) {
      setMedications(predictedMedications.medications);
    } else {
      setMedications([]);
    }
  };

  const handleSymptomChange = (event, index) => {
    const updatedSymptoms = [...selectedSymptoms];
    updatedSymptoms[index] = event.target.checked ? 1 : 0;
    setSelectedSymptoms(updatedSymptoms);
    console.log("selected ", selectedSymptoms);
  };

  return (
    <div className="">
      <nav className="fixed z-30 w-screen px-4 py-4 bg-white border-gray-200 shadow-lg lg:px-6 dark:bg-gray-800 bg-white/95 ">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto ">
          <a href="/" className="flex items-center">
            <img
              src="/logos/logo1.png"
              className="mr-3 rounded-full-6 h-16 "
              alt="Logo"
            />
            {/* <span
              className="self-center text-xl font-bold tracking-widest text-gray-500 whitespace-nowrap dark:text-white"
              style={{ fontFamily: "Righteous" }}
            >
              MediConnect
            </span> */}
          </a>
          <div className="flex items-center lg:order-2">
            <Link
              to="/signIn"
              className="flex w-32  items-center justify-between gap-x-2 text-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <p style={{ fontFamily: "Righteous" }}>Login</p>
              <LoginIcon />
            </Link>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className="pt-24 bg-gray-700 py-8 text-white min-h-screen">
        <h1 className="text-2xl font-bold mb-4 text-center pt-4">
          Disease Predictor
        </h1>
        <h2 className="pb-4 text-lg font-bold text-center">
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
        <div className="flex flex-col gap-12">
          <button
            onClick={predict}
            className="bg-blue-500 text-white  mx-8 h-16 rounded"
          >
            Predict Disease
          </button>
          {prediction && (
            <div className="mt-4 px-10">
              <p className="text-xl text-white dark:text-white font-semibold">
                The predicted disease is: {prediction}
              </p>
              <p className="text-lg text-white dark:text-white font-semibold mt-2">
                Medications:
              </p>
              <ul className="list-disc ml-6">
                {medications.map((medication, index) => (
                  <li key={index} className="text-white dark:text-white">
                    Medicine: {medication.name}
                    <li className="pl-4 list-none">
                      : Dosage: {medication.dosage}
                    </li>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
