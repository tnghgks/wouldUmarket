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

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    SET_PROFILE: (state, action) => {
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
    FOLLOW: (state, action) => {
      return {
        ...state,
        isfollow: action.payload.isfollow,
        following: action.payload.following,
        followingCount: state.followingCount + 1,
      };
    },
    UN_FOLLOW: (state, action) => {
      return {
        ...state,
        isfollow: action.payload.isfollow,
        following: action.payload.following,
        followingCount: state.followingCount - 1,
      };
    },
  },
});

export const { SET_PROFILE, FOLLOW, UN_FOLLOW } = profileSlice.actions;

export default profileSlice.reducer;
