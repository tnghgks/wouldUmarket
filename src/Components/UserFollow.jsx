import styled from "styled-components";
import profileImg from "../assets/Ellipse-1.png";
import FollowButton from "./button/SmallButton";

const Img = styled.img`
  width: 50px;
  height: 50px;
`;
const UserFollowContainer = styled.section`
  width: 358px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  font-size: 1.4rem;
`;

const UserFollowText = styled.small`
  display: inline-block;
  font-size: 1.2rem;
  margin-top: 6px;
`;

const Button = styled(FollowButton)`
  margin-left: auto;
`;

function UserFollow() {
  return (
    <UserFollowContainer>
      <Img src={profileImg} />
      <div>
        <p>애월읍 위니브 감귤 농장</p>
        <UserFollowText>@ weniv_Mandarin</UserFollowText>
      </div>
      <Button />
    </UserFollowContainer>
  );
}

export default UserFollow;
