import styled from "styled-components";
import iconMore from "../../assets/icon/s-icon-more-vertical.png";

const Img = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

function IconMoreVerticalSmall({ className, onClick }) {
  return <Img className={className} src={iconMore} alt="작은 더보기 수직 아이콘" onClick={onClick} />;
}
export default IconMoreVerticalSmall;
