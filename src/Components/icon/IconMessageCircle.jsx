import styled from "styled-components";
import iconMessage from "../../assets/icon/icon-message-circle.svg";

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

function IconMessageCircle({ className }) {
  return <Img className={className} src={iconMessage} alt="메세지 아이콘" />;
}
export default IconMessageCircle;
