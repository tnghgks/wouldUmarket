import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPostCommentsData, getPostData } from "../api/post";

const FETCH_POST_DATA = createAsyncThunk("postDetail/FETCH_POST_DATA", getPostData);

const FETCH_COMMENT_DATA = createAsyncThunk("postDetail/FETCH_COMMENT_DATA", getPostCommentsData);

const initialState = {
  post: {},
  comments: [],
  modal: {},
  status: "",
};

const postDetailSlice = createSlice({
  name: "postDetail",
  initialState,
  reducers: {
    ADD_COMMENT: (state, action) => {
      state.comments.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FETCH_POST_DATA.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(FETCH_POST_DATA.fulfilled, (state, action) => {
      state.post = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(FETCH_COMMENT_DATA.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
});

export { FETCH_POST_DATA, FETCH_COMMENT_DATA };
export const { ADD_COMMENT } = postDetailSlice.actions;
export default postDetailSlice.reducer;
