import styled from "styled-components";
import textLogo from "../assets/subTitle.png";

const Img = styled.img`
  width: 132px;
  aspect-ratio: 132/117;
`;

function TextLogo({ className }) {
  return <Img className={className} src={textLogo} alt="로고" />;
}
export default TextLogo;
