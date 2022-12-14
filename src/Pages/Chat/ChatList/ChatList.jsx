import styled from "styled-components";
import profileImg from "../../../assets/Ellipse-1.png";
import BasicNav from "../../../Components/BasicNav";

const ChatListContainer = styled.main`
  width: 390px;
  height: 712px;
  margin: 0 auto;
  position: relative;
`;

const Img = styled.img`
  width: 42px;
  height: 42px;
  position: relative;
`;

const CheckOnline = styled.section`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--subColor);
  position: absolute;
  top: 0;
`;

const UserSerchContainer = styled.li`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  font-size: 1.4rem;
  font-family: "godo", sans-serif;
`;

const UserFollowSmall = styled.p`
  display: inline-block;
  font-size: 1.2rem;
  margin-top: 4px;
  font-family: "LINESeedKR-Bd", sans-serif;
  color: #767676;
`;

const ChatDateSpan = styled.span`
  position: absolute;
  right: 0;
  color: #dbdbdb;
  font-family: "LINESeedKR-Bd", sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
`;

function ChatList() {
  return (
    <>
      <BasicNav />
      <ChatListContainer>
        <ul>
          <UserSerchContainer>
            <Img src={profileImg} />
            <CheckOnline />
            <div>
              <p>애월읍 위니브 감귤 농장</p>
              <UserFollowSmall>
                <small>이번에 정정 언제하맨 마씸?</small>
                <ChatDateSpan>2022.12.14</ChatDateSpan>
              </UserFollowSmall>
            </div>
          </UserSerchContainer>
        </ul>
      </ChatListContainer>
    </>
  );
}

export default ChatList;
