import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const SET_PROFILE = createAsyncThunk("profile/SET_PROFILE", async ({ accountname, token }) => {
  try {
    const res = await fetch(`https://mandarin.api.weniv.co.kr/profile/${accountname}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    const { profile } = await res.json();

    return profile;
  } catch (error) {
    console.log(error);
  }
});

export const FOLLOW = createAsyncThunk("profile/FOLLOW", async ({ dispatch, accountname, token }) => {
  try {
    const res = await fetch(`https://mandarin.api.weniv.co.kr/profile/${accountname}/follow`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    const { profile, message } = await res.json();

    if (!profile) return alert(message);

    dispatch(SET_PROFILE({ accountname, token }));
  } catch (error) {
    console.log(error);
  }
});

export const UN_FOLLOW = createAsyncThunk("profile/UNFOLLOW", async ({ dispatch, accountname, token }) => {
  try {
    const res = await fetch(`https://mandarin.api.weniv.co.kr/profile/${accountname}/unfollow`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    const { profile, message } = await res.json();

    if (!profile) return alert(message);
    dispatch(SET_PROFILE({ accountname, token }));
  } catch (error) {
    console.log(error);
  }
});

export const MODIFY_PROFILE = createAsyncThunk("profile/MODIFY_PROFILE", async ({ editUserData, token }) => {
  try {
    const res = await fetch(`https://mandarin.api.weniv.co.kr/user`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(editUserData),
    });
    const { user } = await res.json();

    return user;
  } catch (error) {
    console.log(error);
  }
});

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
      state.userId = action.payload._id;
      state.username = action.payload.username;
      state.accountname = action.payload.accountname;
      state.image = action.payload.image;
      state.isfollow = action.payload.isfollow;
      state.following = action.payload.following;
      state.follower = action.payload.follower;
      state.followerCount = action.payload.followerCount;
      state.followingCount = action.payload.followingCount;
      state.intro = action.payload.intro;
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
