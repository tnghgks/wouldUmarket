import styled from "styled-components";
import BasicNav from "../../../Components/Navbar/BasicNav";
import TabMenu from "../../../Components/TabMenu";
import ChatListProfile from "../../../Components/Chat/ChatListProfile";

const ChatListContainer = styled.ul`
  min-width: 390px;
  height: 712px;
  margin: 0 auto;
  padding: 24px 16px 0 16px;
  margin-top: 48px;
`;

function ChatList() {
  return (
    <main>
      <h1 className="ir-hidden">채팅 리스트</h1>
      <BasicNav />
      <ChatListContainer>
        <ChatListProfile
          newChat="new"
          chilDren="멋쟁이사자처럼 likelion"
          chat="리덕스가 뭐죠? "
          listChatDate="2022.12.14"
        />
        <ChatListProfile
          newChat="new"
          chilDren="개발자가 되고싶은 사람들"
          chat="뭐부터 공부하죠?"
          listChatDate="2069.06.27"
        />
        <ChatListProfile
          newChat=""
          chilDren="칠드런 프젝7조"
          chat="화이이이팅!"
          listChatDate="2022.12.09"
        />
      </ChatListContainer>
      <TabMenu />
    </main>
  );
}

export default ChatList;
