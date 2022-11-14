import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  isLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.name = "User Name";
      state.isLogged = true;
    },
    logout: (state) => {
      state.name = "";
      state.isLogged = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
