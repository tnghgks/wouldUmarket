import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fieldname: "image",
  originalname: "2.png",
  encoding: "7bit",
  mimetype: "image/png",
  destination: "uploadFiles/",
  filename: "1640066364747.png",
  path: "uploadFiles/1640066364747.png",
  size: 47406,
};

const imgSlice = createSlice({
  name: "img",
  initialState,
  reducers: {
    GET_IMAGE: (state, action) => {
      return {
        ...state,
        fieldname: action.payload.fieldname,
        originalname: action.payload.originalname,
        encoding: action.payload.encoding,
        mimetype: action.payload.mimetype,
        destination: action.payload.destination,
        filename: action.payload.filename,
        path: action.payload.path,
        size: action.payload.size,
      };
    },
  },
});

export const { GET_IMAGE } = imgSlice.actions;

export default imgSlice.reducer;
