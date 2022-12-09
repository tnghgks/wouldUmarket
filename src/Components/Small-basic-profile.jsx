import styled from "styled-components";
import basicProfile from "../assets/basic-profile-img.png";

const Img = styled.img`
  width: 36px;
  height: 36px;
`;

function SmallProfileImg() {
  return <Img src={basicProfile} alt="작은 베이직 프로필 이미지" />;
}
export default SmallProfileImg;
