import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatList from "../Pages/Chat/ChatList/ChatList";
import ChatRoom from "../Pages/Chat/ChatRoom/ChatRoom";
import PostDetail from "../Pages/PostDetail/PostDetail";
import PostUpload from "../Pages/PostUpload/PostUpload";
import Profile from "../Pages/UserProfile/Profile";
import Register from "../Pages/Register/Register";
import Search from "../Pages/Search/Search";
import SetProfile from "../Pages/SetProfile/SetProfile";
import Page404 from "../Pages/Page404/Page404";
import Follows from "../Pages/Follows/Follows";
import Login from "../Pages/Login/Login";
import LoginEmail from "../Pages/LoginEmail/LoginEmail";
import SplashScreen from "../Pages/SplashScreen/SplashScreen";
import Feed from "../Pages/Home/Feed";
import EditUserProfile from "../Pages/EditUserProfile/EditUserProfile";
import EditProduct from "../Pages/EditProduct/Editproduct";
import AddProduct from "../Pages/AddProduct/AddProduct";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/loginEmail" element={<LoginEmail />} />
        <Route path="/register" element={<Register />} />

        <Route path="/feed" element={<Feed />} />

        <Route path="/profile/setProfile" element={<SetProfile />} />
        <Route path="/profile/myProfile" element={<Profile />} />

        <Route path="/profile/addProduct" element={<AddProduct />} />
        <Route path="/profile/editProduct/:id" element={<EditProduct />} />
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
