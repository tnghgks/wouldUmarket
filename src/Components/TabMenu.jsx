import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import IconHome from "./icon/IconHome";
import IconMessageCircle from "./icon/IconMessageCircle";
import IconEdit from "./icon/IconEdit";
import IconUser from "./icon/IconUser";
import { useSelector } from "react-redux";

function TabMenu() {
  const { pathname } = useLocation();
  const userInfo = useSelector((state) => state.userInfo);
  return (
    <MenuContainer>
      <nav>
        <ListContainer>
          <ItemContainer>
            <Link to={"/feed"}>
              <IconHome pathname={pathname} />
              <p>홈</p>
            </Link>
          </ItemContainer>
          <ItemContainer>
            <Link to={"/chat/chatList"}>
              <IconMessageCircle pathname={pathname} />
              <p>채팅</p>
            </Link>
          </ItemContainer>
          <ItemContainer>
            <Link to={"/post/postUpload"}>
              <IconEdit />
              <p>게시물 작성</p>
            </Link>
          </ItemContainer>
          <ItemContainer>
            <Link to={`/profile/${userInfo.accountname}`}>
              <IconUser pathname={pathname} />
              <p>프로필</p>
            </Link>
          </ItemContainer>
        </ListContainer>
      </nav>
    </MenuContainer>
  );
}

export default TabMenu;

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
  & > a {
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    font-size: 1rem;
  }
  cursor: pointer;
`;
