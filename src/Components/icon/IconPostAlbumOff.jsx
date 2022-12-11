import styled from "styled-components";
import iconPostAlbumOff from "../../assets/icon/icon-post-album-off.png";

const Img = styled.img`
  width: 26px;
  height: 26px;
`;

function IconPostAlbumOff() {
  return <Img src={iconPostAlbumOff} alt="앨범 끄기 아이콘" />;
}
export default IconPostAlbumOff;
