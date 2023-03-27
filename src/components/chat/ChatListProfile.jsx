import styled from "styled-components";
import profileImg from "../../assets/Ellipse-1.png";
import { Link } from "react-router-dom";

/**
 *
 * @param {{newChat: "new" ? chilDren: "채팅방이름" ? chat: "마지막채팅내역" ? listChatDate: "마지막채팅시간"}} param0
 * @returns
 */
function ChatListProfile({ newChat, chilDren, chat, listChatDate }) {
  return (
    <li>
      <UserSearchContainer to="/chat/:id">
        <ChatProfileImg>
          <Img src={profileImg} alt="" />
          <CheckOnline newChat={newChat} />
        </ChatProfileImg>
        <div>
          <p>{chilDren}</p>
          <UserFollowSmall>{chat}</UserFollowSmall>
        </div>
        <ChatDateSpan>{listChatDate}</ChatDateSpan>
      </UserSearchContainer>
    </li>
  );
}

export default ChatListProfile;

const Img = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;

const CheckOnline = styled.div`
  display: ${({ newChat }) => (newChat ? "block" : "none")};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--subColor);
  position: absolute;
  top: 0;
`;

const UserSearchContainer = styled(Link)`
  padding: 2px 0 3px 0;
  background-color: #ffffff;
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-size: 1.4rem;
  font-family: "godo", sans-serif;
  margin-bottom: 20px;
`;

const UserFollowSmall = styled.small`
  display: inline-block;
  font-size: 1.2rem;
  margin-top: 7px;
  font-family: "LINESeedKR-Bd", sans-serif;
  font-weight: 400;
  color: #767676;
`;

const ChatDateSpan = styled.p`
  margin-top: 26px;
  margin-left: auto;
  color: #767676;
  font-family: "LINESeedKR-Bd", sans-serif;
  font-weight: 400;
  font-size: 10px;
`;

const ChatProfileImg = styled.div`
  width: 42px;
  height: 42px;
  position: relative;
`;
