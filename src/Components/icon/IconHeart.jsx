import styled from "styled-components";
import iconHeart from "../../assets/icon/icon-heart.png";
import iconHeartFill from "../../assets/icon/icon-heart-active.svg";

const Img = styled.img`
  width: 20px;
  height: 20px;
`;
/**
 *
 * @param {{toggle:boolean;onClick:function}} param0
 * @returns
 */
function IconHeart({ className, toggle, onClick }) {
  return <Img className={className} src={toggle ? iconHeartFill : iconHeart} onClick={onClick} alt="하트 아이콘" />;
}
export default IconHeart;
