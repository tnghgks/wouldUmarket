import styled from "styled-components";
import iconPostListOff from "../../assets/icon/icon-post-list-off.png";

const Img = styled.img`
  width: 26px;
  height: 26px;
`;

function IconPostListOff() {
  return <Img src={iconPostListOff} alt="포스트 리스트 끄기" />;
}
export default IconPostListOff;
