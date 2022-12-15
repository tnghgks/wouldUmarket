import styled from "styled-components";
import profileImg from "../assets/Ellipse-1.png";

const Img = styled.img`
  width: 50px;
  height: 50px;
`;

const UserSerchContainer = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.4rem;
  font-family: "Godo", sans-serif;
  background-color: #ffffff;
`;

const UserFollowSmall = styled.small`
  font-size: 1.2rem;
  font-family: "LINESeedKR", sans-serif;
  display: inline-block;
  margin-top: 6px;
`;

function UserSerch() {
  return (
    <UserSerchContainer>
      <Img src={profileImg} />
      <div>
        <p>애월읍 위니브 감귤 농장</p>
        <UserFollowSmall>@ weniv_Mandarin</UserFollowSmall>
      </div>
    </UserSerchContainer>
  );
}

export default UserSerch;
