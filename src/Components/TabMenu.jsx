import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import IconHome from "./icon/IconHome";
import IconMessageCircle from "./icon/IconMessageCircle";
import IconEdit from "./icon/IconEdit";
import IconUser from "./icon/IconUser";
import Home from "../Pages/Home/Home";
import ChatList from "../Pages/Chat/ChatList/ChatList";
import PostUpload from "../Pages/Post/PostUpload/PostUpload";
import Profile from "../Pages/Profile/UserProfile/Profile";

const MenuContainer = styled.footer`
  width: 100%;
  position: fixed;
  border-top: 0.5px solid #dbdbdb;
  bottom: 0%;
  padding: 12px 0 10px;
  background-color: #ffffff;
`;

const ListContainer = styled.ol`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ItemContainer = styled.li`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 1rem;
  cursor: pointer;
`;

function TabMenu() {
  const { pathname } = useLocation();

  return (
    <MenuContainer>
      <nav>
        <ListContainer>
          <Link to={"/"} element={<Home />}>
            <ItemContainer>
              <IconHome pathname={pathname} />
              <p>홈</p>
            </ItemContainer>
          </Link>
          <Link to={"/chat/chatList"} element={<ChatList />}>
            <ItemContainer>
              <IconMessageCircle pathname={pathname} />
              <p>채팅</p>
            </ItemContainer>
          </Link>
          <Link to={"/post/postUpload"} element={<PostUpload />}>
            <ItemContainer>
              <IconEdit />
              <p>게시물 작성</p>
            </ItemContainer>
          </Link>
          <Link to={"/profile/myProfile"} element={<Profile />}>
            <ItemContainer>
              <IconUser pathname={pathname} />
              <p>프로필</p>
            </ItemContainer>
          </Link>
        </ListContainer>
      </nav>
    </MenuContainer>
  );
}

export default TabMenu;
