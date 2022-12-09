import styled from "styled-components";
import googleImg from "../assets/google.png";

const Img = styled.img`
  width: 18px;
  height: 18px;
`;

function GoogleIcon() {
  return <Img src={googleImg} alt="구글 아이콘" />;
}
export default GoogleIcon;
