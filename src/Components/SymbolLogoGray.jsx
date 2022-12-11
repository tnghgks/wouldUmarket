import styled from "styled-components";
import symbolLogoGray from "../assets/symbol-logo-gray.png";

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

function SymbolLogoGray() {
  return <Img src={symbolLogoGray} alt="심볼 로고 회색" />;
}
export default SymbolLogoGray;
