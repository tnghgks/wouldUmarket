import { configureStore } from "@reduxjs/toolkit";
import UserInfoReducer from "./UserInfo";
import ProfileReducer from "./Profile";
import RegisteredReducer from "./Register";
import PostDetailReducer from "./PostDetail";
import SearchDataReducer from "./SearchData";
import FollowListReducer from "./Follow";
import PostListReducer from "./PostList";
import ProductReducer from "./Product";
import ProductListReducer from "./ProductList";
import ModalReducer from "./Modal";

export default configureStore({
  reducer: {
    modal: ModalReducer,
    userInfo: UserInfoReducer,
    profile: ProfileReducer,
    signUp: RegisteredReducer,
    postDetail: PostDetailReducer,
    searchData: SearchDataReducer,
    followList: FollowListReducer,
    postList: PostListReducer,
    product: ProductReducer,
    productList: ProductListReducer,
  },
});
