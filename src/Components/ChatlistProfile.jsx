import styled from "styled-components";
import profileImg from "../assets/Ellipse-1.png";

const Img = styled.img`
  width: 42px;
  height: 42px;
`;

const CheckOnline = styled.div`
  display: ${({ newchat }) => (newchat ? "block" : "none")};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--subColor);
  position: absolute;
  top: 0;
`;

const UserSerchContainer = styled.li`
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
  color: #dbdbdb;
  font-family: "LINESeedKR-Bd", sans-serif;
  font-weight: 400;
  font-size: 10px;
`;

const ChatProfileimg = styled.div`
  width: 42px;
  height: 42px;
  position: relative;
`;
/**
 *
 * @param {{newchat: "new" ? children: "채팅방이름" ? chat: "마지막채팅내역"}} param0
 * @returns
 */
function ChatListProfile({ newchat, children, chat, listchatdate }) {
  return (
    <ul>
      <UserSerchContainer>
        <ChatProfileimg>
          <Img src={profileImg} />
          <CheckOnline newchat={newchat} />
        </ChatProfileimg>
        <div>
          <p>{children}</p>
          <UserFollowSmall>{chat}이번에 정정 언제하맨 마씸?</UserFollowSmall>
        </div>
        <ChatDateSpan>{listchatdate}</ChatDateSpan>
      </UserSerchContainer>
    </ul>
  );
}

export default ChatListProfile;
