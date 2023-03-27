import styled from "styled-components";
import iconHome from "../../assets/icon/icon-home.svg";
import iconHomeFill from "../../assets/icon/icon-home-fill.svg";

const Icon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${(props) => (props.isOn ? iconHomeFill : iconHome)});
  background-repeat: no-repeat;
  background-position: center;
`;

function IconHome({ className, pathname }) {
  let isOn = false;
  if (pathname === "/feed") {
    isOn = true;
  }
  return <Icon className={className} isOn={isOn} />;
}
export default IconHome;
