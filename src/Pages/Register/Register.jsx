import styled from "styled-components";
import CommonInput from "../../Components/CommonInput";
import CommonButton from "../../Components/button/CommonButton";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { SET_EMAIL_PASSWORD } from "../../store/Register";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [validationError, setValidationError] = useState("");

  //이메일 Input이 변경되었을때
  function handleEmailChange(e) {
    const { value } = e.target;

    //현재 Input value를 State에 저장하고 검사함
    setEmail((prev) => {
      emailValidation(value);
      return value;
    });
  }

  //패스워드 Input이 변경되었을때
  function handlePasswordChange(e) {
    const { value } = e.target;

    //현재 Input value를 State에 저장하고 검사함
    setPassword((prev) => {
      passwordValidation(value);
      return value;
    });
  }

  //이메일 검사 함수
  function emailValidation(email) {
    //이메일 정규 표현식
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    // 이메일 값이 정규표현식과 매칭되지 않는다면
    if (!emailRegex.test(email)) {
      setEmailError("올바른 이메일 형식이 아닙니다.");

      // 25자 보다 크다면
    } else if (email.length > 25) {
      setEmailError("글자수가 25자를 초과하였습니다.");

      //모든 검사를 통과 했다면
    } else {
      setEmailError("");
    }
  }

  function passwordValidation(password) {
    // A-Z, a-z, 0-9 특수문자가 포함되어 있는지, 8자 이상
    const passRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~?!@#$%^&*_-]).{8,}$/;

    // 패스워드 값이 정규표현식과 매칭되지 않는다면
    if (!passRegex.test(password)) {
      setPasswordError(
        "대문자, 소문자, 숫자, 특수문자가 포함된 8자 이상이어야 합니다."
      );

      // 25자 보다 크다면
    } else if (password.length > 25) {
      setPasswordError("패스워드가 25자를 초과하였습니다.");

      //모든 검사를 통과 했다면
    } else {
      setPasswordError("");
    }
  }

  // 서브밋 이 후 백엔드 이메일 검증
  async function getEmailValidate(emailValue) {
    try {
      //검증 오류 초기화
      setValidationError("");

      //백엔드 이메일 검증
      const response = await fetch(
        "https://mandarin.api.weniv.co.kr/user/emailvalid",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user: {
              email: emailValue,
            },
          }),
        }
      );

      const { message } = await response.json();

      if (message !== "사용 가능한 이메일 입니다.") {
        setValidationError(message);
      } else {
        //이메일 에러도 없고 패스워드 에러도 없다면
        if (!emailError && !passwordError) {
          //스토어에 이메일과 패스워드만 저장
          dispatch(SET_EMAIL_PASSWORD({ email, password }));

          // 다음 페이지로 이동
          navigate("/profile/setProfile");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const {
      email: { value: emailValue },
    } = e.target;

    getEmailValidate(emailValue);
  }

  return (
    <Container>
      <Title>이메일로 회원가입</Title>
      <form onSubmit={handleSubmit}>
        <TextContainer>
          <div>
            <CommonInput
              name="email"
              type="text"
              placeholder="이메일 주소를 입력해주세요"
              onChange={handleEmailChange}
              required={true}
            />
            <p>{emailError}</p>
          </div>
          <div>
            <CommonInput
              name="password"
              type="password"
              placeholder="비밀번호를 설정해주세요"
              onChange={handlePasswordChange}
              required={true}
            />
            <p>{passwordError}</p>
          </div>
        </TextContainer>
        <p>{validationError}</p>
        <CommonButton size="lg" bgColor="light" children="다음" />
      </form>
    </Container>
  );
}

export default Register;
