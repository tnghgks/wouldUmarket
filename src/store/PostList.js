import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const SET_FOLLOWERS_POSTS = createAsyncThunk("postList/SET_FOLLOWERS_POSTS", async ({ token }) => {
  try {
    const res = await fetch("https://mandarin.api.weniv.co.kr/post/feed", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    const { posts } = await res.json();

    return posts;
  } catch (error) {
    console.log(error);
  }
});

const SET_USER_POSTS = createAsyncThunk("postList/SET_USER_POSTS", async ({ accountname, token }) => {
  try {
    const res = await fetch(`https://mandarin.api.weniv.co.kr/post/${accountname}/userpost`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    const { post } = await res.json();

    return post;
  } catch (error) {
    console.log(error);
  }
});

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
