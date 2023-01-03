import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import FullLogoBig from "../../assets/symbol-logo-W-big.png";
import TextLogo from "../../Components/TextLogo";
import SplashLoader from "./SplashLoader/SplashLoader";
import { getCookie } from "../../cookie/index";

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
  }, 2600);

  return (
    <Container>
      <Logo src={FullLogoBig} alt="우주마켓 로고" />
      <TextLogo />
      <SplashLoader />
    </Container>
  );
}

export default SplashScreen;

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
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--mainColor);
  overflow: hidden;
  animation: ${splash} 3s ease-in;
`;

const Logo = styled.img`
  display: block;
  width: 80%;
  max-width: 250px;
  min-width: 200px;
  aspect-ratio: 1/1;
`;
