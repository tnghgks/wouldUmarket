import styled from "styled-components";
import messageCircle from "../../assets/message-circle.png";

const Img = styled.img`
  width: 18x;
  height: 18px;
`;

function MessageCircle({ className }) {
  return <Img className={className} src={messageCircle} alt="노란색 메세지 아이콘" />;
}
export default MessageCircle;
