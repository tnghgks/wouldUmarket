import styled from "styled-components";
import iconPostAlbumOn from "../../assets/icon/icon-post-album-on.png";

const Img = styled.img`
  width: 26px;
  height: 26px;
`;

function IconPostAlbumOn({ className }) {
  return <Img className={className} src={iconPostAlbumOn} alt="앨범 켜기 아이콘" />;
}
export default IconPostAlbumOn;
