import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  target: "",
  main: {
    modalType: "",
    isOpen: false,
  },
  sub: {
    isOpen: false,
  },
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    OPEN_MAIN_MODAL: (state, actions) => {
      const { modalType, target } = actions.payload;
      state.target = target;
      state.main.modalType = modalType;
      state.main.isOpen = true;
    },
    CLOSE_MAIN_MODAL: (state) => {
      state.main.isOpen = false;
    },
    OPEN_SUB_MODAL: (state, actions) => {
      const { modalType } = actions.payload;
      state.sub.modalType = modalType;
      state.sub.isOpen = true;
    },
    CLOSE_SUB_MODAL: (state) => {
      state.sub.isOpen = false;
    },
    CLOSE_ALL_MODAL: (state) => {
      state.main.isOpen = false;
      state.sub.isOpen = false;
    },
  },
});

export const {
  OPEN_MAIN_MODAL,
  CLOSE_MAIN_MODAL,
  OPEN_SUB_MODAL,
  CLOSE_SUB_MODAL,
  CLOSE_ALL_MODAL,
} = modalSlice.actions;

export default modalSlice.reducer;
