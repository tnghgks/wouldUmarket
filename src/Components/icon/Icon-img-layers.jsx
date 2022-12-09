import styled from "styled-components";
import iconImgLayers from "../../assets/icon/icon-img-layers.svg";

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

function IconImgLayers() {
  return <Img src={iconImgLayers} alt="이미지 레이어 아이콘" />;
}
export default IconImgLayers;
