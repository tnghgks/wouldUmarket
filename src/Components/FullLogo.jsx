import styled from "styled-components";
import fullLogo from "../assets/full-logo.png";

const Img = styled.img`
  width: 169px;
  aspect-ratio: 169/105;
`;

function FullLogo({ className }) {
  return <Img className={className} src={fullLogo} alt="로고" />;
}
export default FullLogo;
