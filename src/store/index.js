import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./Auth";
import UserInfoReducer from "./UserInfo";

export default configureStore({
  reducer: {
    auth: tokenReducer,
    userInfo: UserInfoReducer,
  },
});
