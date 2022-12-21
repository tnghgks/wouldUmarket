import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const FETCH_POST_DATA = createAsyncThunk("postDetail/FETCH_POST_DATA", async ({ id, token }) => {
  try {
    const response = await fetch(`https://mandarin.api.weniv.co.kr/post/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const { post } = await response.json();
    return post;
  } catch (error) {
    console.log(error);
  }
});

const FETCH_COMMENT_DATA = createAsyncThunk("postDetail/FETCH_COMMENT_DATA", async ({ id, token }) => {
  try {
    const response = await fetch(`https://mandarin.api.weniv.co.kr/post/${id}/comments`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const { comments } = await response.json();

    return comments;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  post: {},
  comments: [],
  modal: {},
  status: "",
};

const postDetailSlice = createSlice({
  name: "postDetail",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(FETCH_POST_DATA.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(FETCH_POST_DATA.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.post = action.payload;
    });
    builder.addCase(FETCH_POST_DATA.rejected, (state, action) => {
      state.status = "rejected";
    });
    builder.addCase(FETCH_COMMENT_DATA.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(FETCH_COMMENT_DATA.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.comments = action.payload;
    });
    builder.addCase(FETCH_COMMENT_DATA.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export { FETCH_POST_DATA, FETCH_COMMENT_DATA };

export default postDetailSlice.reducer;
