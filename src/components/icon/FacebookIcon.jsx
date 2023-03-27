import styled from "styled-components";
import facebookIcon from "../../assets/facebook.png";

const Img = styled.img`
  width: 11px;
  height: 20px;
`;

function FacebookIcon({ className }) {
  return <Img className={className} src={facebookIcon} alt="페이스북 아이콘" />;
}
export default FacebookIcon;
