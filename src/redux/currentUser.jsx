import { createSlice } from "@reduxjs/toolkit";

// Retrieve the stored user from localStorage
const storedCurrentUser = localStorage.getItem("currentUser");
const storedCurrentPatient = localStorage.getItem("currentPatient");
const storedCurrentDoctor = localStorage.getItem("currentDoctor");
const storedCurrentLaboratorist = localStorage.getItem("currentLabratorist");
const storedCurrentAdmin = localStorage.getItem("currentAdmin");
const storedCurrentFinance = localStorage.getItem("currentFinance");

// Check if storedCurrentUser is not null or undefined before parsing
let parsedCurrentUser = null;
let parsedCurrentPatient = null;
let parsedCurrentDoctor = null;
let parsedCurrentLaboratorist = null;
let parsedCurrentAdmin = null;
let parsedCurrentFinance = null;

if (storedCurrentUser !== null && storedCurrentUser !== undefined) {
  try {
    parsedCurrentUser = JSON.parse(storedCurrentUser);
  } catch (e) {
    console.error("Error parsing storedCurrentUser:", e);
    // Optionally, clear the invalid entry from localStorage
    localStorage.removeItem("currentUser");
  }
}

if (storedCurrentPatient !== null && storedCurrentPatient !== undefined) {
  try {
    parsedCurrentPatient = JSON.parse(storedCurrentPatient);
  } catch (e) {
    console.error("Error parsing storedCurrentPatient:", e);
    // Optionally, clear the invalid entry from localStorage
    localStorage.removeItem("currentPatient");
  }
}

if (storedCurrentDoctor !== null && storedCurrentDoctor !== undefined) {
  try {
    parsedCurrentDoctor = JSON.parse(storedCurrentDoctor);
  } catch (e) {
    console.error("Error parsing storedCurrentDoctor:", e);
    // Optionally, clear the invalid entry from localStorage
    localStorage.removeItem("currentDoctor");
  }
}

if (
  storedCurrentLaboratorist !== null &&
  storedCurrentLaboratorist !== undefined
) {
  try {
    parsedCurrentLaboratorist = JSON.parse(storedCurrentLaboratorist);
  } catch (e) {
    console.error("Error parsing storedCurrentLaboratorist:", e);
    // Optionally, clear the invalid entry from localStorage
    localStorage.removeItem("currentLaboratorist");
  }
}

if (storedCurrentFinance !== null && storedCurrentFinance !== undefined) {
  try {
    parsedCurrentFinance = JSON.parse(storedCurrentFinance);
  } catch (e) {
    console.error("Error parsing storedCurrentFinance:", e);
    // Optionally, clear the invalid entry from localStorage
    localStorage.removeItem("currentFinance");
  }
}

if (storedCurrentAdmin !== null && storedCurrentAdmin !== undefined) {
  try {
    parsedCurrentAdmin = JSON.parse(storedCurrentAdmin);
  } catch (e) {
    console.error("Error parsing storedCurrentAdmin:", e);
    // Optionally, clear the invalid entry from localStorage
    localStorage.removeItem("currentAdmin");
  }
}

// Initial state
const initialState = {
  currentUser: parsedCurrentUser,
  currentPatient: parsedCurrentPatient,
  currentDoctor: parsedCurrentDoctor,
  currentLabratorist: parsedCurrentLaboratorist,
  currentAdmin: parsedCurrentAdmin,
  currentFinance: parsedCurrentFinance,
};

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
    setCurrentPatient: (state, action) => {
      state.currentPatient = action.payload;
      localStorage.setItem("currentPatient", JSON.stringify(action.payload));
    },
    setCurrentDoctor: (state, action) => {
      state.currentDoctor = action.payload;
      localStorage.setItem("currentDoctor", JSON.stringify(action.payload));
    },
    setCurrentLaboratorist: (state, action) => {
      state.currentLabratorist = action.payload;
      localStorage.setItem(
        "currentLabratorist",
        JSON.stringify(action.payload)
      );
    },
    setCurrentFinance: (state, action) => {
      state.currentFinance = action.payload;
      localStorage.setItem("currentFinance", JSON.stringify(action.payload));
    },
    setCurrentAdmin: (state, action) => {
      state.currentAdmin = action.payload;
      localStorage.setItem("currentAdmin", JSON.stringify(action.payload));
    },
  },
});

export const { setCurrentUser,setCurrentAdmin, setCurrentDoctor, setCurrentFinance, setCurrentLaboratorist, setCurrentPatient } = currentUserSlice.actions;
export default currentUserSlice.reducer;
