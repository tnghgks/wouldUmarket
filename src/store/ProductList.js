import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const SET_PRODUCT_LIST = createAsyncThunk("productList/SET_PRODUCT_LIST", async ({ accountname, token }) => {
  try {
    const res = await fetch(`https://mandarin.api.weniv.co.kr/product/${accountname}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    const { product } = await res.json();

    return product;
  } catch (error) {
    console.log(error);
  }
});

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
