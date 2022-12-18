import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import FullLogo from "../../Components/FullLogo";
import TextLogo from "../../Components/TextLogo";
import SplashLoader from "./SplashLoader/SplashLoader";

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
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/login");
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
