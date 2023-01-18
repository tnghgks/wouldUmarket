import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserProfile,
  follow,
  unFollow,
  modifyProfile,
} from "../api/profile";

export const SET_PROFILE = createAsyncThunk(
  "profile/SET_PROFILE",
  getUserProfile
);

export const FOLLOW = createAsyncThunk(
  "profile/FOLLOW",
  async (accountname, thunkApi) => {
    await follow(accountname);
    thunkApi.dispatch(SET_PROFILE(accountname));
  }
);

export const UN_FOLLOW = createAsyncThunk(
  "profile/UNFOLLOW",
  async (accountname, thunkApi) => {
    await unFollow(accountname);
    thunkApi.dispatch(SET_PROFILE(accountname));
  }
);

export const MODIFY_PROFILE = createAsyncThunk(
  "profile/MODIFY_PROFILE",
  modifyProfile
);

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
  intro: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(SET_PROFILE.fulfilled, (state, action) => {
      return { ...action.payload.profile, userId: action.payload.profile._id };
    });
    builder.addCase(MODIFY_PROFILE.fulfilled, (state, action) => {
      state.username = action.payload.username;
      state.accountname = action.payload.accountname;
      state.image = action.payload.image;
      state.intro = action.payload.intro;
    });
  },
});

export default profileSlice.reducer;
