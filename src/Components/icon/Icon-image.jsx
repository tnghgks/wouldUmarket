import styled from "styled-components";
import iconImage from "../../assets/icon/icon-image.png";

const Img = styled.img`
  width: 22px;
  height: 22px;
`;

function IconImage() {
  return <Img src={iconImage} alt="이미지 아이콘" />;
}
export default IconImage;
