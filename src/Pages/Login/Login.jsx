import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MessageCircle from "../../assets/message-circle.png";
import FullLogo from "../../Components/FullLogo";
import GoogleIcon from "../../assets/google.png";
import FacebookIcon from "../../assets/facebook.png";
import backGroundImage from "../../assets/backgroundImage.png";

function Login() {
  return (
    <Container>
      <FullLogo className={"fullLogo"} />
      <img className="backGroundImage" src={backGroundImage} alt="" />
      <LoginContainer>
        <BtnContainer>
          <BtnKakao>
            <SNSLogo src={MessageCircle} />
            <BtnText>카카오톡 계정으로 로그인</BtnText>
          </BtnKakao>
          <BtnGoogle>
            <SNSLogo src={GoogleIcon} />
            <BtnText>구글 계정으로 로그인</BtnText>
          </BtnGoogle>
          <BtnFacebook>
            <SNSLogo src={FacebookIcon} />
            <BtnText>페이스북 계정으로 로그인</BtnText>
          </BtnFacebook>
        </BtnContainer>
        <LinkContainer>
          <LoginLink>이메일로 로그인</LoginLink>
          <Link>회원가입</Link>
        </LinkContainer>
      </LoginContainer>
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
