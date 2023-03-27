import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import FullLogoBig from "../../assets/symbol-logo-W-big.png";
import TextLogo from "../../components/logo/TextLogo";
import SplashLoader from "./SplashLoader/SplashLoader";
import { getCookie } from "../../lib/util/cookie";
import { getCheckToken } from "../../api/splashscreen";

function SplashScreen() {
  const token = getCookie("accessToken");
  const navigate = useNavigate();

  setTimeout(async () => {
    if (token) {
      const isValid = await getCheckToken();

      if (isValid) return navigate("/feed");
    }

    navigate("/login");
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

const Container = styled.main`
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
