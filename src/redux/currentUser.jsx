import { createSlice } from "@reduxjs/toolkit";

// Retrieve the stored user from localStorage
const storedCurrentUser = localStorage.getItem("currentUser");

// Check if storedCurrentUser is not null or undefined before parsing
let parsedCurrentUser = null;
if (storedCurrentUser !== null && storedCurrentUser !== undefined) {
  try {
    parsedCurrentUser = JSON.parse(storedCurrentUser);
  } catch (e) {
    console.error("Error parsing storedCurrentUser:", e);
    // Optionally, clear the invalid entry from localStorage
    localStorage.removeItem("currentUser");
  }
}

// Initial state
const initialState = {
  currentUser: parsedCurrentUser,
};

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
  },
});

export const { setCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
