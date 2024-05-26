import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

// const storedPatientData = localStorage.getItem("patients");
const response = await axios.get("http://localhost:5000/testNames");
const data = response.data;
const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
const reversedData=sortedData.reverse()
data.reverse();
const quantity = sortedData.length;
console.log(quantity)
const initialState = {
  testNames: reversedData,
  quantity: quantity,
};
    // Call the fetchData function to fetch the data and update the initial state
  

// const storedPatientData = localStorage.getItem("patients");

// const initialState = 
// storedPatientData
//   ? JSON.parse(storedPatientData)
//   : 
//   {
//       patients: patientsData,
//       quantity: 3,
//     };

export const patientSlice = createSlice({
  name:"testNames",
  initialState,
  reducers: {
    addTestName:(state, action) => {
      const itemIndex = state.testNames.findIndex(
        (testName) => testName.id==action.payload.id
      );
      if (itemIndex === -1) {
    const response= axios.post('http://localhost:5000/testNames',action.payload).then(()=>{
       console.log(response)
      })
        state.testNames.push(action.payload);
        state.quantity = state.quantity+1;
       
      } else {
        state.testNames[itemIndex].quantity += action.payload.quantity;
      }
    //const { quantity } = calculateQuantity(state.patients);
      state.quantity = quantity;
      localStorage.setItem("testNames", JSON.stringify(state));
    },
    deleteTestName:  (state, action) => {
      try {
        axios.delete(`http://localhost:5000/testNames/${action.payload.id}`);
        console.log('Patient deleted successfully');
        // Optionally perform any additional actions after deletion
      }
       catch (error) {
        console.error('Error deleting patient:', error);
        throw error; // Rethrow the error or handle it as needed
      }
    //   removeObjectWithId(state.patients, action.payload.id);
    //   const { quantity } = calculateQuantity(state.patients);
      state.quantity = quantity;
      localStorage.setItem("patients", JSON.stringify(state));
    },

    updateTestNames:(state, action)=>{
      const itemIndex = state.testNames.findIndex(
        (item) => item.id==action.payload.id
      );
      if (itemIndex === -1) {
      } else {
         axios.put(`http://localhost:5000/testNames/${action.payload.id}`,action.payload); 
        // removeObjectWithId(state.patients, action.payload.id);
        state.testNames.push(action.payload);

      }
    //   const { quantity } = calculateQuantity(state.patients);
      state.quantity = quantity;
      localStorage.setItem("testnames", JSON.stringify(state));
    },
  },
});
export const {addTestName,deleteTestName,updateTestNames}=patientSlice.actions;
export default patientSlice.reducer;
