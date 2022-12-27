import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const SET_USERINFO = createAsyncThunk("userInfo/SET_USERINFO", async (token) => {
  const response = await fetch("https://mandarin.api.weniv.co.kr/user/myinfo", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { user } = await response.json();

  return user;
});

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
