import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const ADD_PRODUCT = createAsyncThunk(
  "product/ADD_PRODUCT",
  async ({ productData, token }) => {
    try {
      const res = await fetch("https://mandarin.api.weniv.co.kr/product", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      const { product } = await res.json();
      return product;
    } catch (error) {
      console.log(error);
    }
  }
);

export const MODIFY_PRODUCT = createAsyncThunk(
  "product/MODIFY_PRODUCT",
  async ({ token, productData }) => {
    try {
      const res = await fetch(
        `https://mandarin.api.weniv.co.kr/product/:product_id`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
          body: JSON.stringify(productData),
        }
      );
      const { product } = await res.json();
      return product;
    } catch (error) {
      console.log(error);
    }
  }
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
      state.id = action.payload._id;
      state.itemName = action.payload.itemName;
      state.price = action.payload.price;
      state.link = action.payload.link;
      state.itemImage = action.payload.itemImage;
      state.author = action.payload.author;
    });
  },
});

export default productSlice.reducer;
