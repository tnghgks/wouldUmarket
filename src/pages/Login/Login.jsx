import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MessageCircle from "../../assets/message-circle.png";
import FullLogoBig from "../../assets/symbol-logo-W-big.png";
import GoogleIcon from "../../assets/google.png";
import FacebookIcon from "../../assets/facebook.png";
import background from "../../assets/login_background.png";

function Login() {
  return (
    <Container>
      <h1 className="ir-hidden">로그인 페이지</h1>
      <Logo src={FullLogoBig} alt="우주마켓 로고" />
      <LoginContainer>
        <BtnContainer>
          <h2 className="ir-hidden">소셜 로그인 버튼</h2>
          <BtnKakao>
            <SNSLogo src={MessageCircle} alt="카카오 메세지 아이콘" />
            <BtnText>카카오톡 계정으로 로그인</BtnText>
          </BtnKakao>
          <BtnGoogle>
            <SNSLogo src={GoogleIcon} alt="구글 아이콘" />
            <BtnText>구글 계정으로 로그인</BtnText>
          </BtnGoogle>
          <BtnFacebook>
            <SNSLogo src={FacebookIcon} alt="페이스북 아이콘" />
            <BtnText>페이스북 계정으로 로그인</BtnText>
          </BtnFacebook>
        </BtnContainer>
        <LinkContainer>
          <h2 className="ir-hidden">로그인 및 회원가입 버튼</h2>
          <LoginLink to="/login/loginEmail">이메일로 로그인</LoginLink>
          <Link to="/register">회원가입</Link>
        </LinkContainer>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(${background});
  overflow: hidden;
  & > .backGroundImage {
    margin-top: 5%;
    width: 50%;
    max-width: 250px;
    min-width: 200px;
    aspect-ratio: 3/5;
  }
`;
const Logo = styled.img`
  position: absolute;
  top: 20%;
  width: 200px;
`;
const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 6vh 34px 10vh 34px;
  border-radius: 20px 20px 0 0;
  background-color: var(--fontColor);
`;

const BtnContainer = styled.section`
  margin-bottom: 10px;
  // 버튼 공통 스타일
  & > button {
    display: flex;
    position: relative;
    margin-bottom: 10px;
    width: 100%;
    padding: 13px 14px;
    border-radius: 44px;
    background-color: var(--fontColor);
    font-family: "LINESeedKR-Bd";
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
const BtnText = styled.p`
  display: inline-block;
  margin: auto;
  color: #767676;
`;
const BtnKakao = styled.button`
  border: 1px solid #f2c94c;
`;
const BtnGoogle = styled.button`
  border: 1px solid #767676;
`;
const BtnFacebook = styled.button`
  border: 1px solid #2d9cdb;
`;
const SNSLogo = styled.img`
  width: 24px;
  height: 24px;
`;
const LinkContainer = styled.section`
  display: flex;
  justify-content: center;
  color: #767676;
`;
const LoginLink = styled(Link)`
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
  }
`;
