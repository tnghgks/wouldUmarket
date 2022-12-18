import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CommonButton from "../../Components/button/CommonButton";
import CommonInput from "../../Components/CommonInput";
import { useDispatch, useSelector } from "react-redux";
import { SET_TOKEN } from "../../store/Auth";
import { SET_USERINFO } from "../../store/UserInfo";

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
  const { auth, userInfo } = useSelector((state) => state);

  async function getLoginData(inputData) {
    const response = await fetch(`https://mandarin.api.weniv.co.kr/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputData),
    });
    const { user } = await response.json();

    getUserData(user.accountname, user.token);
    dispatch(SET_TOKEN(user.token));
  }

  async function getUserData(accountname, token) {
    try {
      const res = await fetch(`https://mandarin.api.weniv.co.kr/profile/${accountname}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      const { profile } = await res.json();
      dispatch(SET_USERINFO(profile));
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, passowrd } = e.target;

    const inputData = {
      user: {
        email: email.value,
        password: passowrd.value,
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
          <CommonInput label="이메일" name="email" type="email" />
          <CommonInput label="비밀번호" name="password" type="password" />
          <p className="warning ">*이메일 또는 비밀번호가 일치하지 않습니다.</p>
          <CommonButton size="lg" bgColor="light" children="다음" />
        </Fieldset>
      </form>
      <Link>이메일로 회원가입</Link>
    </Container>
  );
}

export default LoginEmail;
