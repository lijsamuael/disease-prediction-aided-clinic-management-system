import { createSlice } from "@reduxjs/toolkit";
import prescriptionData from "../models/prescriptions.json";
import Swal from "sweetalert2";
import axios from "axios";
function removeObjectWithId(arr, id) {
  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }

  return arr;
}
// const storedPrescriptionData = localStorage.getItem("prescriptions");

// const initialState =
//   storedPrescriptionData !== null
//     ? JSON.parse(storedPrescriptionData)
//     : {
//         prescriptions: prescriptionData,
//       };
const response = await axios.get("http://localhost:5000/prescriptions");
const data = response.data;
const sortedData = data.sort(
  (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
);
const reversedData = sortedData.reverse();
data.reverse();
const quantity = sortedData.length;
console.log(quantity);
const initialState = {
  prescriptions: reversedData,
  quantity: quantity,
};
export const prescriptionSlice = createSlice({
  name: "prescriptions",
  initialState,
  reducers: {
    sendPrescriptions: (state, action) => {
      const itemIndex = state.prescriptions.findIndex(
        (prescription) => prescription.id === action.payload.id
      );
      if (itemIndex === -1) {
        console.log("api url", `http://localhost:5000/prescriptions`);

        const response = axios
          .post(`http://localhost:5000/prescriptions`, action.payload)
          .then(() => {
            console.log("THE RESPONSE FORM SENDING LAB TEST IS", response);
          })
          .catch((e) => console.log("error in sending lab request", e));

        state.prescriptions.push(action.payload);
        state.quantity = state.quantity + 1;
        Swal.fire("Prescription Sent.", "Success");
      } else {
        console.log("not added");
      }
      localStorage.setItem("prescriptions", JSON.stringify(state));
    },

    // sendBackPrescription: (state, action) => {
    //   removeObjectWithId(state.prescriptions, action.payload.id);
    //   localStorage.setItem("prescriptions", JSON.stringify(state));
    // },

    sendBackPrescription: (state, action) => {
      const itemIndex = state.prescriptions.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
      } else {
        axios.put(
          `http://localhost:5000/prescriptions/${action.payload.id}`,
          action.payload
        );
        removeObjectWithId(state.prescriptions, action.payload.id);
        state.prescriptions.unshift(action.payload);
      }
      localStorage.setItem("prescriptions", JSON.stringify(state));
    },
  },
});

export const { sendPrescriptions, sendBackPrescription } =
  prescriptionSlice.actions;
export default prescriptionSlice.reducer;
