import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CommonButton from "../../Components/button/CommonButton";
import CommonInput from "../../Components/CommonInput";
import { useDispatch, useSelector } from "react-redux";
import { SET_TOKEN } from "../../store/Auth";
import { SET_USERINFO } from "../../store/UserInfo";
import { setCookie } from "../../cookie";

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
  & > button {
    &:hover {
      background-color: var(--mainColor);
      transition: background-color 200ms;
    }
  }
`;

const InputContainer = styled.section`
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

function LoginEmail() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formError, setFormError] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
    validate(formData);
  }

  function validate(formData) {
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!regex.test(formData.email)) {
      setFormError((prev) => {
        return { ...prev, email: "올바른 이메일 형식 아닙니다." };
      });
    } else {
      setFormError("");
    }
  }

  async function getLoginData(inputData) {
    try {
      const response = await fetch(
        `https://mandarin.api.weniv.co.kr/user/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inputData),
        }
      );

      const { user, message } = await response.json();
      setFormError((prev) => {
        return { ...prev, form: message };
      });

      if (!user) return;

      dispatch(
        SET_USERINFO({
          userId: user._id,
          username: user.username,
          email: user.email,
          accountname: user.accountname,
          image: user.image,
        })
      );
      getUserData(user.accountname, user.token);
      if (user.token) {
        setCookie("accessToken", user.token, {
          path: "/",
          secure: true,
          sameSite: "strict",
        });
      }
      navigate("/feed");
    } catch (error) {
      console.log(error);
    }
  }

  async function getUserData(accountname, token) {
    try {
      const res = await fetch(
        `https://mandarin.api.weniv.co.kr/profile/${accountname}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
        }
      );
      const { profile } = await res.json();
      dispatch(SET_USERINFO(profile));
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = e.target;

    const inputData = {
      user: {
        email: email.value,
        password: password.value,
      },
    };
    getLoginData(inputData);
  }

  return (
    <Container>
      <Title>로그인</Title>
      <LoginForm onSubmit={handleSubmit}>
        <InputContainer>
          <CommonInput
            label="이메일"
            type="email"
            name="email"
            onChange={handleChange}
          />
          {formError.email && <Warning>*{formError.email}</Warning>}
          <CommonInput
            label="비밀번호"
            type="password"
            name="password"
            onChange={handleChange}
          />
        </InputContainer>
        {formError.form && <Warning>*{formError.form}</Warning>}
        <ButtonContainer>
          <CommonButton size="lg" bgColor="light" children="다음" />
        </ButtonContainer>
      </LoginForm>
      <SignUpLink to="/register">
        <p className="linkText">이메일로 회원가입</p>
      </SignUpLink>
    </Container>
  );
}

export default LoginEmail;
