import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CommonButton from "../../Components/button/CommonButton";
import CommonInput from "../../Components/CommonInput";

const Container = styled.div`
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

  & > div.inputContainer {
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

function LoginEmail() {
  return (
    <Container>
      <h1 className="title">로그인</h1>
      <div className="inputContainer">
        <CommonInput name="이메일" type="email" />
        <CommonInput name="비밀번호" type="password"></CommonInput>
        <p className="warning ">*이메일 또는 비밀번호가 일치하지 않습니다.</p>
      </div>
      <CommonButton size="lg" bgColor="light" children="다음" />
      <Link>이메일로 회원가입</Link>
    </Container>
  );
}

export default LoginEmail;
