import styled from "styled-components";
import basicProfile from "../assets/basic-profile-img.png";

const Img = styled.div`
  width: 110px;
  height: 110px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  border-radius: 50%;
  background-position: center;
`;

function BasicProfileImg({ className, src = basicProfile }) {
  return <Img className={className} src={src} />;
}
export default BasicProfileImg;
