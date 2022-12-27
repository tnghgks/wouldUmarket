import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./Auth";
import UserInfoReducer from "./UserInfo";
import ProfileReducer from "./Profile";
import RegisteredReducer from "./Register";
import PostDetailReducer from "./PostDetail";
import SearchDataReducer from "./SearchData";
import ModalInfoReducer from "./Modal";
import FollowListReducer from "./Follow";
import ProductReducer from "./Product";

export default configureStore({
  reducer: {
    auth: tokenReducer,
    userInfo: UserInfoReducer,
    profile: ProfileReducer,
    signUp: RegisteredReducer,
    postDetail: PostDetailReducer,
    searchData: SearchDataReducer,
    modalData: ModalInfoReducer,
    followList: FollowListReducer,
    product: ProductReducer,
  },
});
