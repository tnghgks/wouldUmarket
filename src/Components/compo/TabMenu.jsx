import styled from "styled-components";
import IconHome from "../icon/Icon-home";
import IconMessageCircle from "../icon/Icon-message-circle";
import IconEdit from "../icon/Icon-edit";
import IconUser from "../icon/Icon-user";

const MenuContainer = styled.article`
  width: 390px;
  padding: 14px 0;
  border-top: 0.5px solid #dbdbdb;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-sizing: border-box;
`;

const ItemContainer = styled.section`
  width: 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 1rem;
`;

function TabMenu() {
  return (
    <MenuContainer>
      <ItemContainer>
        <IconHome />
        <p>홈</p>
      </ItemContainer>
      <ItemContainer>
        <IconMessageCircle />
        <p>채팅</p>
      </ItemContainer>
      <ItemContainer>
        <IconEdit />
        <p>게시물 작성</p>
      </ItemContainer>
      <ItemContainer>
        <IconUser />
        <p>프로필</p>
      </ItemContainer>
    </MenuContainer>
  );
}

export default TabMenu;
