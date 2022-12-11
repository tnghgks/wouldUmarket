import styled from "styled-components";
import iconDelete from "../../assets/icon/icon-delete.svg";

const Img = styled.img`
  width: 22px;
  height: 22px;
`;

function IconDelete() {
  return <Img src={iconDelete} alt="삭제 아이콘" />;
}
export default IconDelete;
