import styled from "styled-components";
import basicProfile from "../assets/basic-profile-img.png";

const Img = styled.img`
  width: 110px;
  height: 110px;
`;

function BasicProfileImg({ className }) {
  return <Img className={className} src={basicProfile} alt="베이직 프로필 이미지" />;
}
export default BasicProfileImg;
