import styled from "styled-components";
import imgButton from "../assets/img-button.png";

const Img = styled.img`
  width: 36px;
  height: 36px;
`;

function ImgButton() {
  return <Img src={imgButton} alt="이미지 버튼 아이콘" />;
}
export default ImgButton;
