import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatList from "../Pages/Chat/ChatList/ChatList";
import ChatRoom from "../Pages/Chat/ChatRoom/ChatRoom";
import PostDetail from "../Pages/Post/PostDetail/PostDetail";
import PostUpload from "../Pages/Post/PostUpload/PostUpload";
import Profile from "../Pages/Profile/UserProfile/Profile";
import Register from "../Pages/Register/Register";
import Search from "../Pages/Search/Search";
import SetProfile from "../Pages/SetProfile/SetProfile";
import Page404 from "../Pages/Page404/Page404";
import Follows from "../Pages/Profile/Follows/Follows";
import Login from "../Pages/Login/Login";
import LoginEmail from "../Pages/Login/LoginEmail";
import SplashScreen from "../Pages/SplashScreen/SplashScreen";
import EmptyFeed from "../Pages/Home/EmptyFeed/EmptyFeed";
import EditUserProfile from "../Pages/Profile/EditProfile/EditUserProfile/EditUserProfile";
import EditProduct from "../Pages/Profile/EditProfile/EditProduct/Editproduct";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/loginEmail" element={<LoginEmail />} />
        <Route path="/register" element={<Register />} />

        <Route path="/feed" element={<EmptyFeed />} />

        <Route path="/profile/setProfile" element={<SetProfile />} />
        <Route path="/profile/myProfile" element={<Profile />} />

        <Route path="/profile/editProduct" element={<EditProduct />} />
        <Route path="/profile/editProfile" element={<EditUserProfile />} />

        <Route path="/profile/:accountname" element={<Profile />} />

        <Route path="/profile/:accountname/followers" element={<Follows />} />
        <Route path="/profile/:accountname/followings" element={<Follows />} />

        <Route path="/search" element={<Search />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/post/postUpload" element={<PostUpload />} />

        <Route path="/chat/chatList" element={<ChatList />} />
        <Route path="/chat/:id" element={<ChatRoom />} />

        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
