import { configureStore } from "@reduxjs/toolkit";
import UserInfoReducer from "./UserInfo";
import ProfileReducer from "./Profile";
import RegisteredReducer from "./Register";
import PostDetailReducer from "./PostDetail";
import SearchDataReducer from "./SearchData";
import ModalInfoReducer from "./Modal";
import FollowListReducer from "./Follow";
import PostListReducer from "./PostList";
import ProductReducer from "./Product";
import ProductListReducer from "./ProductList";

export default configureStore({
  reducer: {
    userInfo: UserInfoReducer,
    profile: ProfileReducer,
    signUp: RegisteredReducer,
    postDetail: PostDetailReducer,
    searchData: SearchDataReducer,
    modalData: ModalInfoReducer,
    followList: FollowListReducer,
    postList: PostListReducer,
    product: ProductReducer,
    productList: ProductListReducer,
  },
});
