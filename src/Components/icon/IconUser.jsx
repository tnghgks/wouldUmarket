import styled from "styled-components";
import iconUser from "../../assets/icon/icon-user.svg";
import iconUserFill from "../../assets/icon/icon-user-fill.png";

const Icon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${(props) => (props.isOn ? iconUserFill : iconUser)});
  background-repeat: no-repeat;
  background-position: center;
`;

function IconUser({ className, pathname }) {
  let isOn = false;
  if (pathname === "/profile/myProfile") {
    isOn = true;
  }
  return <Icon className={className} isOn={isOn} />;
}
export default IconUser;
