import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CommonButton from "../../Components/button/CommonButton";
import CommonInput from "../../Components/CommonInput";
import { useDispatch, useSelector } from "react-redux";
import { SET_TOKEN } from "../../store/Auth";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
  padding: 30px 34px;
  & > h1.title {
    margin-bottom: 40px;
    font-family: "Godo";
    font-size: 24px;
    font-weight: 500;
  }

  & > .inputContainer {
    position: relative;
    width: 100%;
    margin-bottom: 30px;
    & > form {
      margin-bottom: 16px;
      & > input {
        cursor: pointer;
      }
      & > input:focus {
        border-bottom-color: #f26e22;
        transition: border-bottom-color 200ms;
      }
    }
    & > .warning {
      position: absolute;
      top: 120px;
      color: #eb5757;
    }
  }

  & > button {
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
      background-color: var(--mainColor);
      transition: background-color 200ms;
    }
  }

  & > a {
    text-decoration: none;
    &:visited {
      color: #767676;
    }
  }
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > button {
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
      background-color: var(--mainColor);
      transition: background-color 200ms;
    }
  }
`;

function LoginEmail() {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.auth);
  console.log(accessToken);

  async function getLoginData(inputData) {
    const response = await fetch(
      `https://mandarin.api.weniv.co.kr/user/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputData),
      }
    );
    const { user } = await response.json();
    dispatch(SET_TOKEN(user.token));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = Array.from(e.target.querySelectorAll("input")).map(
      (item) => item.value
    );
    console.log(data);

    const inputData = {
      user: {
        email: data[0],
        password: data[1],
      },
    };
    getLoginData(inputData);
  }

  return (
    <Container>
      <h1 className="title">로그인</h1>
      <form className="inputContainer" onSubmit={handleSubmit}>
        <Fieldset>
          <legend className="ir-hidden">로그인</legend>
          <CommonInput name="이메일" type="email" />
          <CommonInput name="비밀번호" type="password" />
          <p className="warning ">*이메일 또는 비밀번호가 일치하지 않습니다.</p>
          <CommonButton size="lg" bgColor="light" children="다음" />
        </Fieldset>
      </form>
      <Link>이메일로 회원가입</Link>
    </Container>
  );
}

export default LoginEmail;
