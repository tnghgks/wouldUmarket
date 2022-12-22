import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  targetId: "",
  subModal: { isOpen: false },
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    MODAL_TARGET: (state, action) => {
      state.targetId = action.payload;
    },
    SET_MAIN_MODAL: (state, action) => {
      state.isOpen = true;
    },
    SET_SUB_MODAL: (state, action) => {
      state.subModal.isOpen = true;
    },
    CLOSE_MODAL: (state, action) => {
      state.subModal.isOpen = false;
      state.isOpen = false;
    },
  },
});

export const { MODAL_TARGET, SET_MAIN_MODAL, SET_SUB_MODAL, CLOSE_MODAL } = modalSlice.actions;

export default modalSlice.reducer;
