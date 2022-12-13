import styled from "styled-components";
import iconMessageFill from "../../assets/icon/icon-message-circle-fill.png";

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

function IconMessageFill({ className }) {
  return <Img className={className} src={iconMessageFill} alt="채워진 메세지 아이콘" />;
}
export default IconMessageFill;
