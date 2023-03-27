import styled from "styled-components";
import notFoundResult from "../assets/NotFoundResult.png";

function NotFoundResult({ className }) {
  return <Img src={notFoundResult} className={className} alt="검색 결과를 찾을 수 없습니다." />;
}
export default NotFoundResult;

const Img = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  max-width: 450px;
  max-height: 450px;
  min-width: 200px;
  min-height: 200px;
  border-radius: 50%;
  margin: 0 auto;
`;
