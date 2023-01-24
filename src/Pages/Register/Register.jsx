import styled from "styled-components";
import CommonInput from "../../Components/Input/CommonInput";
import CommonButton from "../../Components/Button/CommonButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { emailValidate } from "../../api/auth";
import { useForm } from "react-hook-form";

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
  } = useForm();
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
