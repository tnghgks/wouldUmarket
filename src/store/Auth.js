import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "authToken",
  initialState: {
    authenticated: false,
    accessToken: null,
  },
  reducers: {
    SET_TOKEN: (state, action) => {
      state.authenticated = true;
      state.accessToken = action.payload;
    },
  },
});

export const { SET_TOKEN } = tokenSlice.actions;

export default tokenSlice.reducer;
