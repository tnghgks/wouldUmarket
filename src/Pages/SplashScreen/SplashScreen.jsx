import React from "react";
import styled from "styled-components";
import FullLogo from "../../Components/FullLogo";
import TextLogo from "../../Components/TextLogo";

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
  & > img.fullLogo {
    display: block;
    margin-bottom: 41px;
  }
`;

function SplashScreen() {
  return (
    <Container>
      <FullLogo className={"fullLogo"} />
      <TextLogo />
    </Container>
  );
}

export default SplashScreen;
