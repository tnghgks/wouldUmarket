import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MessageCircle from "../../assets/message-circle.png";
import FullLogoBig from "../../assets/symbol-logo-W-big.png";
import GoogleIcon from "../../assets/google.png";
import FacebookIcon from "../../assets/facebook.png";
import background from "../../assets/login_background.png";
import { getCookie } from "../../cookie";

function Login() {
  const token = getCookie("accessToken");
  const navigate = useNavigate();

  async function getCheckToken() {
    try {
      const response = await fetch("https://mandarin.api.weniv.co.kr/user/checktoken", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      const { isValid } = await response.json();

      return isValid;
    } catch (error) {
      console.log(error);
    }
  }

  async function checkValidToken() {
    const isValid = await getCheckToken();

    if (isValid && token) {
      navigate("/feed");
    }
  }

  useEffect(() => {
    checkValidToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Logo src={FullLogoBig} alt="우주마켓 로고" />
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
          <LoginLink to="/login/loginEmail">이메일로 로그인</LoginLink>
          <Link to="/register">회원가입</Link>
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
