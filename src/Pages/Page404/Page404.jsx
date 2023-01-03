import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NotFoundImg from "../../assets/notFound404.png";
import CommonButton from "../../Components/Button/CommonButton";

function Page404() {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <Img src={NotFoundImg} alt="404 NOT FOUND 잘못된 경로 입니다." />
      <NotFoundText>페이지를 찾을 수 없습니다. :(</NotFoundText>
      <CommonButton size="md" fontColor="white" bgColor="main" onClick={() => navigate(-1)}>
        이전 페이지
      </CommonButton>
    </NotFoundContainer>
  );
}

export default Page404;

const NotFoundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Img = styled.img`
  margin-bottom: 10px;
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 50%;
`;

const NotFoundText = styled.p`
  font-family: "Godo";
  font-weight: 400;
  font-size: 1.4rem;
`;
