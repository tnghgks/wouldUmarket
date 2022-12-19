import styled from "styled-components";
import { Link } from "react-router-dom";
import BasicNav from "../../../Components/Navbar/BasicNav";
import TabMenu from "../../../Components/TabMenu";
import ChatlistProfile from "../../../Components/ChatlistProfile";

const ChatListContainer = styled.main`
  min-width: 390px;
  height: 712px;
  margin: 0 auto;
  padding: 24px 16px 0 16px;
  margin-top: 48px;
`;

function ChatList() {
  return (
    <>
      <BasicNav />
      <ul>
        <ChatListContainer>
          <Link to="/chat/:id">
            <ChatlistProfile
              newChat="new"
              chilDren="멋쟁이사자처럼 likelion"
              chat="리덕스가 뭐죠? "
              listChatDate="2022.12.14"
            />
          </Link>
          <Link to="/chat/:id">
            <ChatlistProfile
              newChat="new"
              chilDren="개발자가 되고싶은 사람들"
              chat="뭐부터 공부하죠?"
              listChatDate="2069.06.27"
            />
          </Link>
          <Link to="/chat/:id">
            <ChatlistProfile
              newChat=""
              chilDren="칠드런 프젝7조"
              chat="화이이이팅!"
              listChatDate="2022.12.09"
            />
          </Link>
        </ChatListContainer>
      </ul>

      <TabMenu />
    </>
  );
}

export default ChatList;
