import styled from "styled-components";
import ChatNav from "../../../Components/Navbar/ChatNav";
import Comment from "../../../Components/Comment";
import profileImg from "../../../assets/Ellipse-1.png";

const Img = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 12px;
`;

const ChatRoomContainer = styled.section`
  width: 390px;
  height: 100vw;
  margin: 0 auto;
  padding: 48px 16px 61px 16px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column-reverse;
`;

const UserChatItem = styled.li`
  width: 327px;
  display: flex;
  margin-bottom: 10px;
`;

const ChatContainer = styled.div`
  max-width: 240px;
  padding: 14px 12px 12px 12px;
  word-break: break-all;
  border: 1px solid #c4c4c4;
  border-radius: 0 8px 8px 8px;
  background-color: #ffffff;
  letter-spacing: 0.1px;
  display: inline;
  align-self: end;
`;

const ChatTimeText = styled.span`
  margin-left: 6px;
  margin-top: auto;
  font-weight: 400;
  font-size: 1rem;
  color: #767676;
`;

const ChattingText = styled.p`
  display: inline;
  vertical-align: bottom;
  font-weight: 400;
  font-size: 1.4rem;
`;

function ChatRoom() {
  return (
    <>
      <ChatNav />
      <ChatRoomContainer>
        <ul>
          <UserChatItem>
            <Img src={profileImg} />
            <ChatContainer>
              <ChattingText>
                옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
                뿐이다.이상의 청춘의 뼈 따듯한 그들의 그와 약동하다. 대고, 못할
                넣는 풍부하게 뛰노는 인생의 힘있다.
              </ChattingText>
            </ChatContainer>
            <ChatTimeText>12:39</ChatTimeText>
          </UserChatItem>

          <UserChatItem>
            <Img src={profileImg} />
            <ChatContainer>
              <ChattingText>안녕하세요. 감귤 사고싶어요요요요요.</ChattingText>
            </ChatContainer>
            <ChatTimeText>12:39</ChatTimeText>
          </UserChatItem>

          <UserChatItem>
            <Img src={profileImg} />
            <ChatContainer>
              <ChattingText></ChattingText>
            </ChatContainer>
            <ChatTimeText>12:39</ChatTimeText>
          </UserChatItem>

          <UserChatItem>
            <Img src={profileImg} />
            <ChatContainer>
              <ChattingText></ChattingText>
            </ChatContainer>
            <ChatTimeText>12:39</ChatTimeText>
          </UserChatItem>
        </ul>
      </ChatRoomContainer>
      <Comment />
    </>
  );
}

export default ChatRoom;
