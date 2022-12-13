import styled from "styled-components";
import iconPostListOn from "../../assets/icon/icon-post-list-on.png";

const Img = styled.img`
  width: 26px;
  height: 26px;
`;

function IconPostListOn({ className }) {
  return <Img className={className} src={iconPostListOn} alt="포스트 리스트 켜기" />;
}
export default IconPostListOn;
