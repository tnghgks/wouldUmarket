import styled, { keyframes } from "styled-components";
import spaceShipSvg from "../../../assets/spaceship.svg";
import shadowSpaceShipSvg from "../../../assets/spaceship_shadow.svg";

function SplashLoader() {
  return (
    <Anim>
      <Loader>
        <svg width="110" height="100">
          <defs>
            <filter id="f1" x="0" y="0">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
          </defs>
          <image href={shadowSpaceShipSvg} x="20" y="20" width="90" height="90" filter="url(#f1)" />
          <image href={spaceShipSvg} width="90" height="90" />
        </svg>
      </Loader>
    </Anim>
  );
}
export default SplashLoader;

const loader = keyframes`
0% {
  transform: translate(-50%,110%);
}
30% {
  transform: translate(-50%,30%);
}
100% {
  transform: translate(-50%,0%);
}`;

const Loader = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    margin-left: -8px;
    bottom: -170px;
    width: 3px;
    background: #fff;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);
    height: 200px;
  }
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    margin-left: 8px;
    bottom: -190px;
    width: 3px;
    background: #000;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%);
    height: 200px;
  }
`;

const Anim = styled.div`
  height: 100%;
  position: absolute;
  left: 50%;
  width: 100px;
  transform: translate(-50%, 100%);
  animation: ${loader} 4s linear;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
`;
