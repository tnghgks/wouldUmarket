import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatList from "../pages/Chat/ChatList/ChatList";
import ChatRoom from "../pages/Chat/ChatRoom/ChatRoom";
import PostDetail from "../pages/PostDetail/PostDetail";
import PostUpload from "../pages/PostUpload/PostUpload";
import Profile from "../pages/UserProfile/Profile";
import Register from "../pages/Register/Register";
import Search from "../pages/Search/Search";
import SetProfile from "../pages/SetProfile/SetProfile";
import Page404 from "../pages/Page404/Page404";
import Follows from "../pages/Follows/Follows";
import Login from "../pages/Login/Login";
import LoginEmail from "../pages/LoginEmail/LoginEmail";
import SplashScreen from "../pages/SplashScreen/SplashScreen";
import Feed from "../pages/Home/Feed";
import EditUserProfile from "../pages/EditUserProfile/EditUserProfile";
import EditProduct from "../pages/EditProduct/Editproduct";
import AddProduct from "../pages/AddProduct/AddProduct";
import GlobalModal from "../components/modal/GlobalModal";

function Router() {
  return (
    <BrowserRouter>
      <GlobalModal />
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
