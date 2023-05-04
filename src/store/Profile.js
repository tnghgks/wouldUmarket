import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserProfile, follow, unFollow, modifyProfile } from "../api/profile";
import { BASE_URL } from "../constant/Backend_URL";

export const SET_PROFILE = createAsyncThunk("profile/SET_PROFILE", getUserProfile);

export const FOLLOW = createAsyncThunk("profile/FOLLOW", async (accountname, thunkApi) => {
  await follow(accountname);
  thunkApi.dispatch(SET_PROFILE(accountname));
});

export const UN_FOLLOW = createAsyncThunk("profile/UNFOLLOW", async (accountname, thunkApi) => {
  await unFollow(accountname);
  thunkApi.dispatch(SET_PROFILE(accountname));
});

export const MODIFY_PROFILE = createAsyncThunk("profile/MODIFY_PROFILE", modifyProfile);

const initialState = {
  status: "",
  profile: {
    userId: "",
    username: "",
    accountname: "",
    image: `${BASE_URL}/Ellipse.png`,
    isfollow: false,
    following: [],
    follower: [],
    followerCount: 0,
    followingCount: 0,
    intro: "",
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(SET_PROFILE.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(SET_PROFILE.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.profile = { ...action.payload.profile, userId: action.payload.profile._id };
    });
    builder.addCase(MODIFY_PROFILE.fulfilled, (state, action) => {
      state.profile = {
        username: action.payload.username,
        accountname: action.payload.accountname,
        image: action.payload.image,
        intro: action.payload.intro,
      };
    });
  },
});

export default profileSlice.reducer;
