import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CommonButton from "../../Components/Button/CommonButton";
import CommonInput from "../../Components/Input/CommonInput";
import { useDispatch } from "react-redux";
import { SET_USERINFO } from "../../store/UserInfo";
import { setCookie } from "../../cookie";
import { login } from "../../api/auth";
import { LOGIN_EMAIL_PATTERN } from "../../constant/regex";
import { useForm } from "react-hook-form";

function LoginEmail() {
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setFocus,
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm();
  const inputData = watch();

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  useEffect(() => {
    const { email, password } = inputData;
    if (email && password) {
      return setDisable(false);
    }
    setDisable(true);
  }, [inputData]);

  async function handleLogin({ email, password }) {
    const inputData = {
      user: {
        email,
        password,
      },
    };
    const { user, message } = await login(inputData);

    if (message) return setError("form", { message });

    if (user.token)
      setCookie("accessToken", user.token, {
        path: "/",
        secure: true,
        sameSite: "strict",
      });

    dispatch(
      SET_USERINFO({
        userId: user._id,
        username: user.username,
        email: user.email,
        accountname: user.accountname,
        image: user.image,
      })
    );

    navigate("/feed");
  }

  return (
    <Container>
      <Title>로그인</Title>
      <LoginForm onSubmit={handleSubmit(handleLogin)}>
        <InputContainer>
          <legend className="ir-hidden">로그인 입력창</legend>
          <CommonInput
            id="email"
            label="이메일"
            register={register("email", {
              required: "Email을 작성해주십시오.",
              pattern: {
                value: LOGIN_EMAIL_PATTERN,
                message: "올바른 이메일 형식 아닙니다.",
              },
            })}
          />
          <Warning>{errors?.email?.message}</Warning>
          <CommonInput
            id="password"
            label="비밀번호"
            type="password"
            register={register("password", {
              required: "Password를 작성해주십시오.",
            })}
          />
          <Warning>{errors?.password?.message}</Warning>
        </InputContainer>
        <Warning>{errors?.form?.message}</Warning>
        <ButtonContainer>
          <CommonButton
            size="lg"
            bgColor={disable ? "light" : "main"}
            children="다음"
            disabled={disable}
            onClick={() => clearErrors("form")}
          />
        </ButtonContainer>
      </LoginForm>
      <SignUpLink to="/register">
        <p className="linkText">이메일로 회원가입</p>
      </SignUpLink>
    </Container>
  );
}

export default LoginEmail;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: auto;
  padding: 30px 34px;
`;

const Title = styled.h1`
  margin-bottom: 40px;
  font-family: "Godo";
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 322px;
  margin-bottom: 20px;
`;
const ButtonContainer = styled.section`
  margin-bottom: 20px;
`;

const InputContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  margin-bottom: 50px;
  & > div > input {
    &:focus {
      border-bottom-color: #f26e22;
      transition: border-bottom-color 200ms;
    }
  }
`;

const Warning = styled.p`
  /* position: absolute; */
  /* top: 120px; */
  /* left: 0; */
  color: #eb5757;
`;

const SignUpLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  & > .linkText {
    color: #767676;
  }
`;
