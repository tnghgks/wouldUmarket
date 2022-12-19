import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  username: "",
  email: "",
  accountname: "",
  image: "https://mandarin.api.weniv.co.kr/Ellipse.png",
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    SET_USERINFO: (state, action) => {
      return {
        ...state,
        userId: action.payload._id,
        username: action.payload.username,
        email: action.payload.email,
        accountname: action.payload.accountname,
        image: action.payload.image,
      };
    },
  },
});

export const { SET_USERINFO } = userInfoSlice.actions;

export default userInfoSlice.reducer;
