import styled from "styled-components";
import profileImg from "../assets/Ellipse-1.png";

const Img = styled.img`
  display: ${(props) => (props.user === "friend" ? "block" : "none")};
  width: 42px;
  height: 42px;
  margin-right: 12px;
`;

const UserChatItem = styled.li`
  width: auto;
  display: flex;
  justify-content: ${(props) =>
    props.user === "friend" ? "flex-start" : "flex-end"};
  margin-bottom: 10px;
`;

const ChatContainer = styled.div`
  max-width: 240px;
  padding: 14px 12px 12px 12px;
  word-break: break-all;
  border: 1px solid #c4c4c4;
  border-radius: ${(props) =>
    props.user === "friend" ? " 0 8px 8px 8px" : " 8px 0 8px 8px"};
  background-color: ${(props) =>
    props.user === "my" ? "var(--accentColor)" : "#ffffff"};
  letter-spacing: 0.1px;
  display: inline;
  align-self: end;
`;

const ChatTimerightText = styled.span`
  display: ${(user) => (user.user === "friend" ? "block" : "none")};
  margin-left: 6px;
  margin-top: auto;
  font-weight: 400;
  font-size: 1rem;
  color: #767676;
`;
const ChatTimeleftText = styled.span`
  display: ${(user) => (user.user === "my" ? "block" : "none")};
  margin-right: 6px;
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

const ChatImg = styled.img`
  border-radius: 8px 8px 8px 8px;
  width: 240px;
  height: 240px;
`;

/**
 *
 * @param {{chattext: "ChattingText" ; chattime: "ChatTime" ; user: "my"|"friend" ; imges: "ImgSrc"}} param0
 * @returns
 */
function FriendChat({ chattext, chattime, user, imges }) {
  return (
    <UserChatItem user={user}>
      <Img src={profileImg} user={user} />
      <ChatTimeleftText user={user}>{chattime}</ChatTimeleftText>

      {imges ? (
        <ChatImg src={imges} />
      ) : (
        <ChatContainer user={user}>
          <ChattingText>{chattext}</ChattingText>
        </ChatContainer>
      )}

      <ChatTimerightText user={user}>{chattime}</ChatTimerightText>
    </UserChatItem>
  );
}

export default FriendChat;
