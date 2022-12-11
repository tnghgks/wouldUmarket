import styled from "styled-components";
import iconHome from "../../assets/icon/icon-home.svg";

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

function IconHome() {
  return <Img src={iconHome} alt="홈 아이콘" />;
}
export default IconHome;
