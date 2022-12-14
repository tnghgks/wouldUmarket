import styled from "styled-components";
import BasicNav from "../../../Components/Navbar/BasicNav";
import TabMenu from "../../../Components/TabMenu";
import ChatlistProfile from "../../../Components/ChatlistProfile";

const ChatListContainer = styled.main`
  width: 390px;
  height: 712px;
  padding: 72px 16px 0 16px;
  margin: 0 auto;
`;

function ChatList() {
  return (
    <>
      <BasicNav />
      <ChatListContainer>
        <ChatlistProfile
          newchat="new"
          children="멋쟁이사자처럼 likelion"
          chat="리덕스가 뭐죠? "
          listchatdate="2022.12.14"
        />
        <ChatlistProfile
          newchat="new"
          children="개발자가 되고싶은 사람들"
          chat="뭐부터 공부하죠?"
          listchatdate="2069.06.27"
        />
        <ChatlistProfile
          newchat=""
          children="칠드런 프젝7조"
          chat="화이이이팅!"
          listchatdate="2022.12.09"
        />
      </ChatListContainer>
      <TabMenu />
    </>
  );
}

export default ChatList;
