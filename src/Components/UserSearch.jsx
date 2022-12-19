import { Link } from "react-router-dom";
import styled from "styled-components";
import profileImg from "../assets/Ellipse-1.png";

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
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

function UserSerch({ userData }) {
  return (
    <Link to={`/profile/${userData.accountname}`}>
      <UserSerchContainer>
        <Img src={userData.image ? userData.image : profileImg} />
        <div>
          <p>{userData.username}</p>
          <UserFollowSmall>@ {userData.accountname}</UserFollowSmall>
        </div>
      </UserSerchContainer>
    </Link>
  );
}

export default UserSerch;
