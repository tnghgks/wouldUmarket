import styled from "styled-components";
import symbolLogo from "../assets/symbol-logo-W.png";

const Img = styled.img`
  width: 144px;
  height: 144px;
`;

function SymbolLogo({ className }) {
  return <Img className={className} src={symbolLogo} alt="심볼 로고 하얀색" />;
}
export default SymbolLogo;
