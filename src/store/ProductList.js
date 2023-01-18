import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductList } from "../api/product";

const SET_PRODUCT_LIST = createAsyncThunk(
  "productList/SET_PRODUCT_LIST",
  getProductList
);

const initialState = {
  products: [],
};

const productListSlice = createSlice({
  name: "productList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(SET_PRODUCT_LIST.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export { SET_PRODUCT_LIST };
export default productListSlice.reducer;
