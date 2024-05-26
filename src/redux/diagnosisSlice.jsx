import { createSlice } from "@reduxjs/toolkit";
import diagnosisData from "../models/diagnosis.json";
import Swal from "sweetalert2";
import axios from 'axios'
function removeObjectWithId(arr, id) {
  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }

  return arr;
}
// const storeddiagnosisData = localStorage.getItem("diagnosises");
// const initialState =
//   storeddiagnosisData !== null
//     ? JSON.parse(storeddiagnosisData)
//     : {
//         diagnosises: diagnosisData,
//       };
const response = await axios.get("http://localhost:5000/treatments");
const data = response.data;
const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
const reversedData=sortedData.reverse()
data.reverse();
const quantity = sortedData.length;
console.log(quantity)
const initialState = {
  diagnosises:reversedData,
  quantity: quantity,
};

export const diagnosiseslice = createSlice({
  name: "diagnosises",
  initialState,
  reducers: {
    sendDiagnosises:(state, action) => {
      if (!state.diagnosises) {
        return state; // or return an updated state if needed
      }
      const itemIndex= state.diagnosises.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        const response= axios.post('http://localhost:5000/treatments',action.payload)
        console.log(response)
        state.diagnosises.push(action.payload);

        Swal.fire("treatment information Sent.", "Success");
      } else {
        Swal.fire("Send fail.");
        console.log("not added");
      }
      localStorage.setItem("diagnosises", JSON.stringify(state));
    },

    sendBackdiagnosis: (state, action) => {
      const itemIndex = state.diagnosises.findIndex((item) => item.id === action.payload.id);
      if (itemIndex !== -1) {
        axios.put(`http://localhost:5000/treatments/${action.payload.id}`, action.payload);
        removeObjectWithId(state.diagnosises, action.payload.id);
        state.diagnosises.push(action.payload);
      } else {
        Swal.fire("Payment not Confirmed.");
      }
      localStorage.setItem("diagnosises", JSON.stringify(state));
    },
    
  },
});

export const {sendDiagnosises, sendBackdiagnosis } = diagnosiseslice.actions;
export default diagnosiseslice.reducer;
