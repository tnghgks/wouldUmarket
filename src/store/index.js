import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./Auth";
import UserInfoReducer from "./UserInfo";
import ProfileReducer from "./Profile";
import RegisteredReducer from "./Register";
import EditprofileReducer from "./Editprofile";
import UploadimageReducer from "./image";

export default configureStore({
  reducer: {
    auth: tokenReducer,
    userInfo: UserInfoReducer,
    profile: ProfileReducer,
    signUp: RegisteredReducer,
    editprofile: EditprofileReducer,
    img: UploadimageReducer,
  },
});
