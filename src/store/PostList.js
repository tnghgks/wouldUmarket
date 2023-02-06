import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFollowersPosts, getPostsByAccountName } from "../api/post";

const SET_FOLLOWERS_POSTS = createAsyncThunk("postList/SET_FOLLOWERS_POSTS", getFollowersPosts);

const SET_USER_POSTS = createAsyncThunk("postList/SET_USER_POSTS", getPostsByAccountName);

const initialState = {
  posts: [],
  status: "",
};

const postListSlice = createSlice({
  name: "postList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(SET_FOLLOWERS_POSTS.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(SET_FOLLOWERS_POSTS.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(SET_USER_POSTS.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(SET_USER_POSTS.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.status = "fulfilled";
    });
  },
});

export { SET_FOLLOWERS_POSTS, SET_USER_POSTS };
export default postListSlice.reducer;
