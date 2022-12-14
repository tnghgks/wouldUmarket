import styled from "styled-components";
import symbolLogoGray from "../assets/symbol-logo-gray.png";

const Img = styled.img`
  width: 100px;
  aspect-ratio: 169/105;
`;

function SymbolLogoGray({ className }) {
  return <Img className={className} src={symbolLogoGray} alt="심볼 로고 회색" />;
}
export default SymbolLogoGray;
