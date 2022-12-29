import styled from "styled-components";
import whiteLogo from "../assets/symbol-logo-W.png";

function FullLogo({ className }) {
  return <Img className={className} src={whiteLogo} alt="로고" />;
}
export default FullLogo;

const Img = styled.img`
  width: 110px;
  aspect-ratio: 1/1;
  margin: 10px;
`;
