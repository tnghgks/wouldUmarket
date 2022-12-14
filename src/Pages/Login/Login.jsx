import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FacebookIcon from "../../Components/FacebookIcon";
import FullLogo from "../../Components/FullLogo";
import GoogleIcon from "../../Components/GoogleIcon";
import MessageCircle from "../../Components/MessageCircle";
import backGroundImage from "../../assets/backgroundImage.png";

function Login() {
  return (
    <Container>
      <FullLogo className={"fullLogo"} />
      <img className="backGroundImage" src={backGroundImage} alt="" />
      <div className="loginContainer">
        <div className="btnContainer">
          <button className="kakao">
            <MessageCircle className={"snsLogo"} />
            <p className="btnText">카카오톡 계정으로 로그인</p>
          </button>
          <button className="google">
            <GoogleIcon className={"snsLogo"} />
            <p className="btnText">구글 계정으로 로그인</p>
          </button>
          <button className="facebook">
            <FacebookIcon className={"snsLogo"} />
            <p className="btnText">페이스북 계정으로 로그인</p>
          </button>
        </div>
        <div className="linkContainer">
          <Link className="emailLogin">이메일로 로그인</Link>
          <Link>회원가입</Link>
        </div>
      </div>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding-top: 35vh;
  background-color: var(--mainColor);
  overflow: hidden;
  & > .backGroundImage {
    position: absolute;
    right: 0;
    top: 0;
  }

  & > .loginContainer {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 6vh 34px 10vh 34px;
    border-radius: 20px 20px 0 0;
    background-color: var(--fontColor);
    & > .btnContainer {
      margin-bottom: 10px;
      & > button {
        display: flex;
        position: relative;
        margin-bottom: 10px;
        padding: 13px 14px;
        width: 100%;
        border-radius: 44px;
        background-color: var(--fontColor);
        font-family: "LINESeedKR-Bd";
        font-size: 1.4rem;
        cursor: pointer;
        & > .snsLogo {
          width: 24px;
          height: 24px;
        }
        & > .btnText {
          display: inline-block;
          margin: auto;
          color: #767676;
        }
      }
      & > .kakao {
        border: 1px solid #f2c94c;
      }
      & > .google {
        border: 1px solid #767676;
      }
      & > .facebook {
        border: 1px solid #2d9cdb;
      }
    }
    & > .linkContainer {
      display: flex;
      justify-content: center;
      color: #767676;
      & > Link {
        cursor: pointer;
      }
      & > .emailLogin {
        position: relative;
        margin-right: 12px;
        &::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          height: 9px;
          margin: 0 6px;
          background-color: #c4c4c4;
          /* background: 1px solid pink; */
        }
      }
    }
  }
`;
