import styled from "styled-components";
import iconArrowLeft from "../../assets/icon/icon-arrow-left.png";

const Img = styled.img`
  width: 22px;
  height: 22px;
`;

function IconArrowLeft() {
  return <Img src={iconArrowLeft} alt="왼쪽 화살 아이콘" />;
}
export default IconArrowLeft;
