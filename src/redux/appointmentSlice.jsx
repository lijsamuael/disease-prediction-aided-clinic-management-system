import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
function removeObjectWithId(arr, id) {
  const objWithIdIndex = arr.findIndex((obj) => obj.id == id);
  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }
  return arr;
}
function calculateQuantity(appointments) {
  let quantity = 0;
  for (const item of appointments) {
    quantity += item.quantity;
  }
  return { quantity };
}
// const storedPatientData = localStorage.getItem("patients");
const response = await axios.get("http://localhost:5000/appointments");
const data = response.data;
const sortedData = data.sort(
  (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
);
const reversedData = sortedData.reverse();
const quantity = data.length;
console.log(quantity);
const initialState = {
  appointments: reversedData,
  quantity: quantity,
};
// Call the fetchData function to fetch the data and update the initial state
export const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      const itemIndex = state.appointments.findIndex(
        (item) => item.id == action.payload.id
      );
      if (itemIndex === -1) {
        state.appointments.splice(0, 0, action.payload);
        state.quantity = state.quantity + 1;
        const response = axios
          .post("http://localhost:5000/appointments", action.payload)
          .then(() => {
            console.log(response.data);
          });
      } else {
        state.appointments[itemIndex].quantity += action.payload.quantity;
      }
      const { quantity } = calculateQuantity(state.appointments);
      state.quantity = quantity;
      localStorage.setItem("appointments", JSON.stringify(state));
    },
    deleteAppointment: (state, action) => {
      try {
        axios.delete(`http://localhost:5000/appointments/${action.payload.id}`);
        console.log("appointment deleted successfully");
        // Optionally perform any additional actions after deletion
      } catch (error) {
        console.error("Error deleting patient:", error);
      }
      removeObjectWithId(state.appointments, action.payload.id);
      const { quantity } = calculateQuantity(state.appointments);
      state.quantity = quantity;
      localStorage.setItem("appointments", JSON.stringify(state));
    },
    updateAppointment: (state, action) => {
      const itemIndex = state.appointments.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
      } else {
        axios.put(
          `http://localhost:5000/appointments/${action.payload.id}`,
          action.payload
        );
        removeObjectWithId(state.appointments, action.payload.id);
        state.appointments.splice(itemIndex, 0, action.payload);
      }
      const { quantity } = calculateQuantity(state.appointments);
      state.quantity = quantity;
      localStorage.setItem("appointments", JSON.stringify(state));
    },
  },
});
export const { addAppointment, deleteAppointment, updateAppointment } =
  appointmentSlice.actions;
export default appointmentSlice.reducer;
