import styled from "styled-components";
import notFound404 from "../../assets/notFound404.png";

function NotFoundImg({ className }) {
  return <Img className={className} src={notFound404} alt="Not Found 아이콘" />;
}
export default NotFoundImg;

const Img = styled.img`
  width: 323px;
  height: 400px;
`;
