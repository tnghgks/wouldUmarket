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
  async ({ token, productData, id }) => {
    console.log(productData);
    try {
      const res = await fetch(
        `https://mandarin.api.weniv.co.kr/product/${id}`,
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

export const MODIFY_PRODUCT_IMAGE = createAsyncThunk(
  "product/MODIFY_PRODUCT_IMAGE",
  async ({ formData }) => {
    try {
      const res = await fetch(
        `https://mandarin.api.weniv.co.kr/image/uploadfile`,
        {
          method: "POST",
          body: formData,
        }
      );
      const imgData = await res.json();
      if (!imgData) return;
      return `https://mandarin.api.weniv.co.kr/${imgData.filename}`;
    } catch (error) {
      console.log(error);
    }
  }
);

export const DETAIL_PRODUCT = createAsyncThunk(
  "product/DETAIL_PRODUCT",
  async ({ token, id }) => {
    try {
      const res = await fetch(
        `https://mandarin.api.weniv.co.kr/product/detail/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
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
