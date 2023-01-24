import styled from "styled-components";
import CommonInput from "../../Components/Input/CommonInput";
import CommonButton from "../../Components/Button/CommonButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { emailValidate } from "../../api/auth";
import { useForm } from "react-hook-form";
import {
  REGISTER_EMAIL_PATTERN,
  REGISTER_PASSWORD_PATTERN,
} from "../../constant/regex";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// 유효성 검사
const registerValidation = yup.object().shape({
  email: yup
    .string()
    .required("이메일 주소를 입력해주세요.")
    .matches(REGISTER_EMAIL_PATTERN, "올바른 이메일 형식이 아닙니다.")
    .max(25, "글자수가 25자를 초과하였습니다."),
  password: yup
    .string()
    .required("비밀번호를 설정해주세요.")
    .matches(
      REGISTER_PASSWORD_PATTERN,
      "대문자, 소문자, 숫자, 특수문자가 포함된 8자 이상이어야 합니다."
    )
    .max(25, "비밀번호는 25자 이하여야 합니다."),
});

function Register() {
  const navigate = useNavigate();
  const [disable, setDisable] = useState(true);
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerValidation) });
  const inputData = watch();

  useEffect(() => {
    const { email, password } = inputData;
    if (email || password) {
      return setDisable(false);
    }
    setDisable(true);
  }, [inputData]);

  // 서브밋 이 후 백엔드 이메일 검증
  async function getEmailValidate(inputData) {
    try {
      //백엔드 이메일 검증
      const userEmail = {
        user: {
          email: inputData.user.email,
        },
      };
      const message = await emailValidate(userEmail);
      if (message !== "사용 가능한 이메일 입니다.") {
        return setError("form", { message });
      } else {
        // 다음 페이지로 이동
        navigate("/profile/setProfile", {
          state: {
            email: inputData.user.email,
            password: inputData.user.password,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRegister({ email, password }) {
    const inputData = {
      user: {
        email,
        password,
      },
    };
    getEmailValidate(inputData);
  }

  return (
    <Container>
      <Title>이메일로 회원가입</Title>
      <form onSubmit={handleSubmit(handleRegister)}>
        <TextContainer>
          <div>
            <CommonInput
              label="이메일"
              type="text"
              register={register("email")}
            />
            <Warning>{errors?.email?.message}</Warning>
          </div>
          <div>
            <CommonInput
              label="비밀번호"
              type="password"
              register={register("password")}
            />
            <Warning>{errors?.password?.message}</Warning>
          </div>
        </TextContainer>
        <CommonButton
          size="lg"
          bgColor={disable ? "light" : "main"}
          children="다음"
          disabled={disable}
          onClick={() => clearErrors("form")}
        />
      </form>
    </Container>
  );
}
export default Register;

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

const Warning = styled.p`
  font-size: 1.2rem;
  color: #eb5757;
`;
