import styled from "styled-components";
import iconHomeFill from "../../assets/icon/icon-home-fill.svg";

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

function IconHomeFill() {
  return <Img src={iconHomeFill} alt="채워진 홈 아이콘" />;
}
export default IconHomeFill;
