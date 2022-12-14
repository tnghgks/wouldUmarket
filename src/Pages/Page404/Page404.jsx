import styled from "styled-components";
import NotFoundImg from "../../assets/notFound404.png";
import CommonButton from "../../Components/button/CommonButton";

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
  width: 223px;
  height: 300px;
`;

const NotFoundText = styled.p`
  font-family: "Godo";
  font-weight: 400;
  font-size: 1.4rem;
`;

function Page404() {
  return (
    <NotFoundContainer>
      <Img src={NotFoundImg} />
      <NotFoundText>페이지를 찾을 수 없습니다. :(</NotFoundText>
      <CommonButton size="md" fontColor="white" bgColor="main">
        이전 페이지
      </CommonButton>
    </NotFoundContainer>
  );
}

export default Page404;
