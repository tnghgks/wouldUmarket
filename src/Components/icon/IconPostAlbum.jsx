import styled from "styled-components";
import iconPostAlbumOff from "../../assets/icon/icon-post-album-off.png";
import iconPostAlbumOn from "../../assets/icon/icon-post-album-on.png";

const Img = styled.div`
  width: 26px;
  height: 26px;
  background-image: url(${(props) => (props.toggle ? iconPostAlbumOn : iconPostAlbumOff)});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

function IconPostAlbum({ className, toggle, onClick }) {
  return <Img className={className} toggle={toggle} onClick={() => onClick(toggle)} />;
}
export default IconPostAlbum;
