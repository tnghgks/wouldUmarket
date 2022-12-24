import styled from "styled-components";
import basicProfile from "../assets/basic-profile-img.png";

const Img = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;
  border: 0.5px solid #dbdbdb;
  border-radius: 50%;
`;

function BasicProfileImg({ className, src = basicProfile }) {
  return <Img className={className} src={src} onError={(e) => (e.target.src = basicProfile)} alt="프로필 이미지" />;
}
export default BasicProfileImg;
