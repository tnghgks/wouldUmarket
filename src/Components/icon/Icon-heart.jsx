import styled from "styled-components";
import iconHeart from "../../assets/icon/icon-heart.png";

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

function IconHeart() {
  return <Img src={iconHeart} alt="하트 아이콘" />;
}
export default IconHeart;
