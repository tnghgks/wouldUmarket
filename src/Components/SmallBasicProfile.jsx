import styled from "styled-components";
import basicProfile from "../assets/basic-profile-img.png";

const Img = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border: 0.5px solid #dbdbdb;
  border-radius: 50%;
`;

function SmallProfileImg({ className, src = basicProfile }) {
  return <Img className={className} src={src} onError={(e) => (e.target.src = basicProfile)} alt="작은 베이직 프로필 이미지" />;
}
export default SmallProfileImg;
