import styled from "styled-components";
import iconSearch from "../../assets/icon/icon-search.png";

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

function IconSearch() {
  return <Img src={iconSearch} alt="검색 아이콘" />;
}
export default IconSearch;
