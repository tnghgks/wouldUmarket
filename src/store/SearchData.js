import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "",
};

export const asyncSearchFetch = createAsyncThunk("searchDataSlice/asyncSearchFetch", async ({ searchInput, token, pageNum = 1, signal = null }) => {
  try {
    const response = await fetch(`https://mandarin.api.weniv.co.kr/user/searchuser/?keyword=${searchInput}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      signal,
    });
    const users = await response.json();

    return users.slice(0, pageNum * 100);
  } catch (error) {
    if (error.name === "AbortError") {
      return [];
    }
    console.log(error);
  }
});

const searchDataSlice = createSlice({
  name: "searchData",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(asyncSearchFetch.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(asyncSearchFetch.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.data = action.payload;
    });
    builder.addCase(asyncSearchFetch.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});
export const { SET_SEARCH_DATA } = searchDataSlice.actions;
export default searchDataSlice.reducer;
