import styled from "styled-components";
import fullLogo from "../assets/full-logo.png";

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

function FullLogo() {
  return <Img src={fullLogo} alt="로고" />;
}
export default FullLogo;
