import styled from "styled-components";
import notFound404 from "../assets/notFound404.png";

const Img = styled.img`
  width: 323px;
  height: 400px;
`;

function NotFoundImg() {
  return <Img src={notFound404} alt="Not Found 아이콘" />;
}
export default NotFoundImg;
