import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userInfo } from "../api/userinfo";

export const SET_USERINFO = createAsyncThunk("userInfo/SET_USERINFO", userInfo);

const initialState = {
  userId: "",
  username: "",
  accountname: "",
  image: "https://mandarin.api.weniv.co.kr/Ellipse.png",
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(SET_USERINFO.fulfilled, (state, action) => {
      state.userId = action.payload._id;
      state.username = action.payload.username;
      state.accountname = action.payload.accountname;
      state.image = action.payload.image;
    });
  },
});

export default userInfoSlice.reducer;
