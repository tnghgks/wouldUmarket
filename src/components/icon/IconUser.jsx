import styled from "styled-components";
import iconUser from "../../assets/icon/icon-user.svg";
import iconUserFill from "../../assets/icon/icon-user-fill.png";
import { useSelector } from "react-redux";

const Icon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${(props) => (props.isOn ? iconUserFill : iconUser)});
  background-repeat: no-repeat;
  background-position: center;
`;

function IconUser({ className, pathname }) {
  const { userInfo } = useSelector((state) => state);
  const encoded = encodeURI(userInfo.accountname);

  let isOn = false;
  if (pathname === `/profile/${encoded}`) {
    isOn = true;
  }
  return <Icon className={className} isOn={isOn} />;
}
export default IconUser;
