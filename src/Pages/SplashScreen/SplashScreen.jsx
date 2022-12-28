import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import FullLogo from "../../Components/FullLogo";
import TextLogo from "../../Components/TextLogo";
import SplashLoader from "./SplashLoader/SplashLoader";
import { getCookie } from "../../cookie/index";

const splash = keyframes`
0% {
  transform: translate(0%,0%);
}
50% {
  transform: translate(0%,0%);
}
100% {
  transform: translate(0%,-100%);
  display: none;
}`;

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
  animation: ${splash} 3s ease-in;
`;

const Logo = styled(FullLogo)`
  display: block;
  margin-bottom: 41px;
`;

function SplashScreen() {
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

  setTimeout(async () => {
    const isValid = await getCheckToken();

    if (isValid && token) {
      navigate("/feed");
    } else {
      navigate("/login");
    }
  }, 3000);

  return (
    <Container>
      <Logo />
      <TextLogo />
      <SplashLoader />
    </Container>
  );
}

export default SplashScreen;
