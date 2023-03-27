import styled from "styled-components";
import iconShare from "../../assets/icon/icon-share.png";

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

function IconShare({ className }) {
  return <Img className={className} src={iconShare} alt="공유 아이콘" />;
}
export default IconShare;
