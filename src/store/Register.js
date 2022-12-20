import { createSlice } from "@reduxjs/toolkit";

const registeredSlice = createSlice({
  name: "registeredData",
  initialState: {
    username: "",
    email: "",
    password: "",
    accountname: "",
    intro: "",
    image: "",
  },
  reducers: {
    SET_EMAIL_PASSWORD: (state, action) => {
      console.log(action);
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { SET_EMAIL_PASSWORD } = registeredSlice.actions;

export default registeredSlice.reducer;
