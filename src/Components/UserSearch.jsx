import { Link } from "react-router-dom";
import styled from "styled-components";
import profileImg from "../assets/Ellipse-1.png";

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserSearchContainer = styled.li`
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

const ColorKeyword = styled.span`
  color: var(--accentColor);
`;

function UserSearch({ userData, searchInput }) {
  function MatchingData({ children }) {
    let targetString = children;
    if (typeof children === "object") {
      targetString = children.join("");
    }

    if (targetString.includes(searchInput)) {
      const splitData = targetString.split(searchInput);
      return (
        <div>
          <span>{splitData[0]}</span>
          <ColorKeyword>{searchInput}</ColorKeyword>
          <span>{splitData[1]}</span>
        </div>
      );
    }
    return <div>{children}</div>;
  }

  return (
    <Link to={`/profile/${userData.accountname}`}>
      <UserSearchContainer>
        <Img src={userData.image ? userData.image : profileImg} onError={(e) => (e.target.src = profileImg)} />
        <div>
          <MatchingData>{userData.username}</MatchingData>
          <UserFollowSmall>
            <MatchingData>@ {userData.accountname}</MatchingData>
          </UserFollowSmall>
        </div>
      </UserSearchContainer>
    </Link>
  );
}

export default UserSearch;
