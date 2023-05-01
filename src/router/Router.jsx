import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../components/Loader";
import GlobalModal from "../components/modal/GlobalModal";
import SplashScreen from "../pages/SplashScreen/SplashScreen";

const ChatList = lazy(() => import("../pages/Chat/ChatList/ChatList"));
const ChatRoom = lazy(() => import("../pages/Chat/ChatRoom/ChatRoom"));
const PostDetail = lazy(() => import("../pages/PostDetail/PostDetail"));
const PostUpload = lazy(() => import("../pages/PostUpload/PostUpload"));
const Profile = lazy(() => import("../pages/UserProfile/Profile"));
const Register = lazy(() => import("../pages/Register/Register"));
const Search = lazy(() => import("../pages/Search/Search"));
const SetProfile = lazy(() => import("../pages/SetProfile/SetProfile"));
const Page404 = lazy(() => import("../pages/Page404/Page404"));
const Follows = lazy(() => import("../pages/Follows/Follows"));
const Login = lazy(() => import("../pages/Login/Login"));
const LoginEmail = lazy(() => import("../pages/LoginEmail/LoginEmail"));
const Feed = lazy(() => import("../pages/Home/Feed"));
const EditUserProfile = lazy(() => import("../pages/EditUserProfile/EditUserProfile"));
const EditProduct = lazy(() => import("../pages/EditProduct/Editproduct"));
const AddProduct = lazy(() => import("../pages/AddProduct/AddProduct"));

function Router() {
  return (
    <BrowserRouter>
      <GlobalModal />
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
