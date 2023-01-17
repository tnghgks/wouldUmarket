import {
  addProduct,
  modifyProduct,
  getDetailProduct,
  modifyProductImage,
} from "../api/product";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const ADD_PRODUCT = createAsyncThunk("product/ADD_PRODUCT", addProduct);

export const MODIFY_PRODUCT = createAsyncThunk(
  "product/MODIFY_PRODUCT",
  modifyProduct
);

export const MODIFY_PRODUCT_IMAGE = createAsyncThunk(
  "product/MODIFY_PRODUCT_IMAGE",
  modifyProductImage
);

export const DETAIL_PRODUCT = createAsyncThunk(
  "product/DETAIL_PRODUCT",
  getDetailProduct
);

const initialState = {
  id: "",
  itemName: "",
  price: 0,
  link: "",
  itemImage: "",
  author: {
    _id: "",
    username: "",
    accountname: "",
    intro: "",
    image: "",
    following: [],
    follower: [],
    followerCount: 0,
    followingCount: 0,
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(ADD_PRODUCT.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.itemName = action.payload.itemName;
      state.price = action.payload.price;
      state.link = action.payload.link;
      state.itemImage = action.payload.itemImage;
      state.author = action.payload.author;
    });
    builder.addCase(MODIFY_PRODUCT.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.itemName = action.payload.itemName;
      state.price = action.payload.price;
      state.link = action.payload.link;
      state.itemImage = action.payload.itemImage;
      state.author = action.payload.author;
    });
    builder.addCase(DETAIL_PRODUCT.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.itemName = action.payload.itemName;
      state.price = action.payload.price;
      state.link = action.payload.link;
      state.itemImage = action.payload.itemImage;
      state.author = action.payload.author;
    });
  },
});

export default productSlice.reducer;
