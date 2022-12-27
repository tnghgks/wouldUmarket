import styled, { keyframes } from "styled-components";
import human from "../assets/loader_human.png";
import planet from "../assets/loader_planet.png";
import bg from "../assets/loader_bg.png";

function Loader() {
  return (
    <LoaderContainer>
      <Title>LOADING...</Title>
      <Planet />
    </LoaderContainer>
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

const LoaderContainer = styled.div`
  width: 450px;
  height: 450px;
  margin: 0 auto;
  position: relative;
  background-image: url(${bg});
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
  width: 250px;
  height: 250px;
  background-image: url(${planet});
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &::after {
    content: url(${human});
    display: block;
    height: 200px;
    width: 100px;
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform-origin: 0% 100%;
    animation: ${Rotate} 3s linear infinite;
  }
`;
