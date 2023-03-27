import styled from "styled-components";
import iconPostListOff from "../../assets/icon/icon-post-list-off.png";
import iconPostListOn from "../../assets/icon/icon-post-list-on.png";

const Img = styled.div`
  width: 26px;
  height: 26px;
  background-image: url(${(props) => (props.toggle ? iconPostListOn : iconPostListOff)});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

function IconPostList({ className, toggle, onClick }) {
  return <Img className={className} toggle={toggle} onClick={() => onClick(toggle)} alt="포스트 리스트 버튼" />;
}
export default IconPostList;
