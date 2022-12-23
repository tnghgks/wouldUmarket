import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const SET_FOLLOWER_LIST = createAsyncThunk("profile/SET_FOLLOWER_LIST", async ({ accountname, token }) => {
  try {
    const res = await fetch(`https://mandarin.api.weniv.co.kr/profile/${accountname}/follower`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    const followerData = await res.json();

    return followerData;
  } catch (error) {
    console.log(error);
  }
});

export const SET_FOLLOWING_LIST = createAsyncThunk("profile/SET_FOLLOWING_LIST", async ({ accountname, token }) => {
  try {
    const res = await fetch(`https://mandarin.api.weniv.co.kr/profile/${accountname}/following`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    const followingData = await res.json();

    return followingData;
  } catch (error) {
    console.log(error);
  }
});

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
