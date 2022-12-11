import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatList from "../Pages/Chat/ChatList/ChatList";
import ChatRoom from "../Pages/Chat/ChatRoom/ChatRoom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PostDetail from "../Pages/Post/PostDetail/PostDetail";
import PostUpload from "../Pages/Post/PostUpload/PostUpload";
import Feed from "../Pages/Profile/Feed/Feed";
import Register from "../Pages/Register/Register";
import Search from "../Pages/Search/Search";
import SetProfile from "../Pages/SetProfile/SetProfile";
import Page404 from "../Pages/Page404/Page404";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/profile/setProfile" element={<SetProfile />} />
        <Route path="/profile/feed" element={<Feed />} />

        <Route path="/search" element={<Search />} />

        <Route path="/post/postDetail" element={<PostDetail />} />
        <Route path="/post/postUpload" element={<PostUpload />} />

        <Route path="/chat/chatList" element={<ChatList />} />
        <Route path="/chat/:id" element={<ChatRoom />} />

        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
