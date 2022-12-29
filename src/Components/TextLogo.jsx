import styled from "styled-components";
import textLogo from "../assets/subTitle.png";

function TextLogo({ className }) {
  return <Img className={className} src={textLogo} alt="로고" />;
}
export default TextLogo;

const Img = styled.img`
  width: 205px;
  aspect-ratio: 205/85;
`;
