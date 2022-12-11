import styled from "styled-components";
import iconUser from "../../assets/icon/icon-user.png";

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

function IconUser() {
  return <Img src={iconUser} alt="유저 아이콘" />;
}
export default IconUser;
