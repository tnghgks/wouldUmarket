import styled from "styled-components";
import iconMessage from "../../assets/icon/icon-message-circle.svg";
import iconMessageFill from "../../assets/icon/icon-message-circle-fill.png";

const Icon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${(props) => (props.isOn ? iconMessageFill : iconMessage)});
  background-repeat: no-repeat;
  background-position: center;
`;

function IconMessageCircle({ className, pathname }) {
  let isOn = false;
  if (pathname === "/chat/chatList") {
    isOn = true;
  }
  return <Icon className={className} isOn={isOn} />;
}
export default IconMessageCircle;
