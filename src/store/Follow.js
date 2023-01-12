import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFollowers, getFollowings } from "../api/profile";

export const SET_FOLLOWER_LIST = createAsyncThunk("profile/SET_FOLLOWER_LIST", getFollowers);

export const SET_FOLLOWING_LIST = createAsyncThunk("profile/SET_FOLLOWING_LIST", getFollowings);

const initialState = {
  users: [],
  follower: [],
};

const followListSlice = createSlice({
  name: "followList",
  initialState,
  reducers: {
    FOLLOW: (state, action) => {
      state.users.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SET_FOLLOWER_LIST.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(SET_FOLLOWING_LIST.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const { FOLLOW } = followListSlice.actions;

export default followListSlice.reducer;
