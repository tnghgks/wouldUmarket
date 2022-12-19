import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./Auth";
import UserInfoReducer from "./UserInfo";
import ProfileReducer from "./Profile";

export default configureStore({
  reducer: {
    auth: tokenReducer,
    userInfo: UserInfoReducer,
    profile: ProfileReducer,
  },
});
