import styled from "styled-components";
import iconUserFill from "../../assets/icon/icon-user-fill.png";

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

function IconUserFill() {
  return <Img src={iconUserFill} alt="채워진 유저 아이콘" />;
}
export default IconUserFill;
