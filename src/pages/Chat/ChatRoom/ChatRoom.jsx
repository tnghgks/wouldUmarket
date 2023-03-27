import styled from "styled-components";
import ChatNav from "../../../components/navbar/ChatNav";
import Comment from "../../../components/Comment";
import ChatRoomChat from "../../../components/chat/ChatRoomChat";
import profileImg from "../../../assets/chat-exapmle.png";

const ChatRoomContainer = styled.ul`
  min-width: 390px;
  height: 100vh;
  margin: 0 auto;
  margin-top: 48px;
  padding: 10px 16px 0 16px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
`;

function ChatRoom() {
  return (
    <main>
      <h1 className="ir-hidden">채팅방</h1>
      <ChatNav sellerName="채팅방" />
      <ChatRoomContainer>
        <ChatRoomChat
          chattext="옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다."
          chattime="12:39"
          user="friend"
        />
        <ChatRoomChat
          chattext="안녕하세요. 감귤 사고싶어요요요요요"
          chattime="12:41"
          user="friend"
        />
        <ChatRoomChat chattext="네 말씀하세요." chattime="12:50" user="my" />
        <ChatRoomChat chattext="네 말씀하세요." chattime="12:50" user="my" imges={profileImg} />
      </ChatRoomContainer>
      <Comment size={true} img={"upload"} placeholder="메시지 입력하기..." btn="전송" />
    </main>
  );
}

export default ChatRoom;
