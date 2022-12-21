import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  username: "",
  accountname: "",
  intro: "",
  image: "https://mandarin.api.weniv.co.kr/Ellipse.png",
  following: [],
  follower: [],
  followerCount: 0,
  followingCount: 0,
};

const EditprofileSlice = createSlice({
  name: "Editprofile",
  initialState,
  reducers: {
    SET_EDITPROFILE: (state, action) => {
      return {
        ...state,
        username: action.payload.username,
        accountname: action.payload.accountname,
        image: action.payload.image,
        intro: action.payload.intro,
      };
    },
  },
});

export const { SET_EDITPROFILE } = EditprofileSlice.actions;

export default EditprofileSlice.reducer;
