import styled, { keyframes } from "styled-components";
import human from "../assets/loader_human.png";
import planet from "../assets/loader_planet.png";
import bg from "../assets/loader_bg.png";

function Loader() {
  return (
    <Container>
      <LoaderContainer>
        <Title>LOADING...</Title>
        <Planet />
      </LoaderContainer>
    </Container>
  );
}
export default Loader;

const Rotate = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }

`;

const blink = keyframes`
    50% {
      opacity: 0;
    }
  
`;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoaderContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  max-width: 450px;
  max-height: 450px;
  min-width: 200px;
  min-height: 200px;
  margin: 0 auto;
  position: relative;
  background-image: url(${bg});
  background-size: cover;
  border-radius: 50%;
`;
const Title = styled.h2`
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 2.5rem;
  transform: translate(-50%, -50%);
  z-index: 10;
  color: white;
  text-shadow: 3px 3px 3px #231f2c;
  font-weight: 700;
  animation: ${blink} 1.5s infinite;
`;

const Planet = styled.div`
  position: absolute;
  width: 100%;
  aspect-ratio: 1/1;
  max-width: 250px;
  max-height: 250px;
  min-width: 150px;
  min-height: 150px;
  background-image: url(${planet});
  background-size: cover;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &::after {
    content: url(${human});
    display: block;
    width: 100%;
    height: 100%;
    max-height: 200px;
    max-width: 100px;
    min-width: 150px;
    min-height: 150px;
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform-origin: 0% 100%;
    animation: ${Rotate} 3s linear infinite;
  }
`;
