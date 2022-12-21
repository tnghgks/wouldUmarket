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
    SET_PROFILE_DATA: (state, action) => {
      state.username = action.payload.username;
      state.accountname = action.payload.accountname;
      state.intro = action.payload.intro;
    },
  },
});

export const { SET_EMAIL_PASSWORD, SET_PROFILE_DATA } = registeredSlice.actions;

export default registeredSlice.reducer;
