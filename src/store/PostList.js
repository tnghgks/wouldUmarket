import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFollowersPosts, getPostsByAccountName } from "../api/post";

const SET_FOLLOWERS_POSTS = createAsyncThunk("postList/SET_FOLLOWERS_POSTS", getFollowersPosts);

const SET_USER_POSTS = createAsyncThunk("postList/SET_USER_POSTS", getPostsByAccountName);

const initialState = {
  posts: [],
};

const postListSlice = createSlice({
  name: "postList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(SET_FOLLOWERS_POSTS.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(SET_USER_POSTS.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export { SET_FOLLOWERS_POSTS, SET_USER_POSTS };
export default postListSlice.reducer;
