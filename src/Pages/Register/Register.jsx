import styled from "styled-components";
import CommonInput from "../../Components/CommonInput";
import CommonButton from "../../Components/button/CommonButton";

const Container = styled.section`
  width: 390px;
  margin: 20px auto;
  padding: 30px 30px;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 40px;
`;

const TextContainer = styled.div`
  & > div {
    :nth-child(2) {
      margin: 16px 0;
    }
    :last-child {
      margin-bottom: 30px;
    }
  }
`;

function Register() {
  return (
    <Container>
      <Title>이메일로 회원가입</Title>
      <TextContainer>
        <div>
          <CommonInput
            name="이메일"
            type="text"
            placeholder="이메일 주소를 입력해주세요"
          />
        </div>
        <div>
          <CommonInput
            name="비밀번호"
            type="password"
            placeholder="비밀번호를 설정해주세요"
          />
        </div>
      </TextContainer>
      <CommonButton size="lg" bgColor="light" children="다음" />
    </Container>
  );
}

export default Register;
