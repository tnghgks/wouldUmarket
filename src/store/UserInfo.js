import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultInstance } from "../api/api";
import { BASE_URL } from "../constant/Backend_URL";

export const SET_USERINFO = createAsyncThunk("userInfo/SET_USERINFO", async (token) => {
  const { data } = await defaultInstance.get("/user/myinfo", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data.user;
});

const initialState = {
  userId: "",
  username: "",
  accountname: "",
  image: `${BASE_URL}/Ellipse.png`,
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    INIT_USERINFO: (state) => {
      state.userId = null;
      state.username = null;
      state.accountname = null;
      state.image = `${BASE_URL}/Ellipse.png`;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SET_USERINFO.fulfilled, (state, action) => {
      state.userId = action.payload._id;
      state.username = action.payload.username;
      state.accountname = action.payload.accountname;
      state.image = action.payload.image;
    });
  },
});

export const { INIT_USERINFO } = userInfoSlice.actions;
export default userInfoSlice.reducer;
