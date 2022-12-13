import styled from "styled-components";
import CommonInput from "../../Components/CommonInput";
import LargeDisableButton from "../../Components/button/LargeDisableButton";

const Container = styled.section`
  width: 390px;
  height: 820px;
  margin: 20px auto;
  padding: 30px 30px;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 45px;
`;

const TextActivInputContainer = styled.form`
  margin: 25px 0;
`;

function Register() {
  return (
    <Container>
      <Title>이메일로 회원가입</Title>
      <TextActivInputContainer>
        <CommonInput
          name="이메일"
          type="text"
          placeholder="이메일 주소를 입력해주세요"
        />
      </TextActivInputContainer>
      <TextActivInputContainer>
        <CommonInput
          name="비밀번호"
          type="password"
          placeholder="비밀번호를 설정해주세요"
        />
      </TextActivInputContainer>
      <LargeDisableButton />
    </Container>
  );
}

export default Register;
