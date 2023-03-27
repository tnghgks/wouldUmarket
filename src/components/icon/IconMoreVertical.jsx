import styled from "styled-components";
import iconMore from "../../assets/icon/icon-more-vertical.png";

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

function IconMoreVertical({ className, onClick }) {
  return <Img className={className} src={iconMore} alt="더보기 세로 아이콘" onClick={onClick} />;
}
export default IconMoreVertical;
