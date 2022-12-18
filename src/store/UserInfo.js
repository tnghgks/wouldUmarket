import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  username: "",
  accountname: "",
  image: "https://mandarin.api.weniv.co.kr/Ellipse.png",
  isfollow: false,
  following: [],
  follower: [],
  followerCount: 0,
  followingCount: 0,
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
        accountname: action.payload.accountname,
        image: action.payload.image,
        isfollow: action.payload.isfollow,
        following: action.payload.following,
        follower: action.payload.follower,
        followerCount: action.payload.followerCount,
        followingCount: action.payload.followingCount,
      };
    },
  },
});

export const { SET_USERINFO } = userInfoSlice.actions;

export default userInfoSlice.reducer;
