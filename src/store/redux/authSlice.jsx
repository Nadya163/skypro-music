import { createSlice } from "@reduxjs/toolkit";

const AUTH_INFO = "auth";

function getAuthFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_INFO));
  } catch (error) {
    console.error(error);
    return null;
  }
}

const initialState = {
  id: 0,
  email: "",
  access: "",
  refresh: "",
  first_name: "",
  last_name: "",
};


const authSlice = createSlice({
  name: "auth",
  initialState: getAuthFromLocalStorage() ?? initialState,
  reducers: {
    setAuth(state, action) {
      const payload = action.payload ?? initialState;

      state.id = payload.id;
      state.email = payload.email;
      state.username = payload.username;
      state.access = payload.access;
      state.refresh = payload.refresh;
      state.first_name = payload.first_name;
      state.last_name = payload.last_name;

      localStorage.setItem(AUTH_INFO, JSON.stringify(state)); 
    },
      resetAuth(state) {
      state.id = 0;
      state.email = "";
      state.access = "";
      state.refresh = "";
      state.first_name = "";
      state.last_name = "";
      localStorage.removeItem(AUTH_INFO);
    }
  },
});
export const { setAuth, resetAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;