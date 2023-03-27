import styled from "styled-components";
import iconMessage from "../../assets/icon/icon-message-circle.svg";

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

function IconMessageCircleSmall({ className }) {
  return <Img className={className} src={iconMessage} alt="작은 메세지 아이콘" />;
}
export default IconMessageCircleSmall;
