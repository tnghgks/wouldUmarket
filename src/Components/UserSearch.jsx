import { useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import profileImg from "../assets/Ellipse-1.png";

function UserSearch({ userData, searchInput }) {
  const MatchingData = useCallback(
    ({ children }) => {
      let targetString = children;
      if (typeof children === "object") {
        targetString = children.join("");
      }

      if (targetString.includes(searchInput)) {
        const splitData = targetString.split(searchInput);

        return (
          <div>
            <span>{splitData.shift()}</span>
            <ColorKeyword>{searchInput}</ColorKeyword>
            <span>{splitData.join("")}</span>
          </div>
        );
      }
      return <div>{children}</div>;
    },

    [userData] // eslint-disable-line react-hooks/exhaustive-deps
  );

  function handleClick() {
    const prevCookie = JSON.parse(localStorage.getItem("recentSearched"));
    if (prevCookie) {
      localStorage.setItem("recentSearched", JSON.stringify([userData, ...prevCookie]));
    }
  }

  return (
    <Link to={`/profile/${userData.accountname}`} onClick={handleClick}>
      <UserSearchContainer>
        <Img src={userData.image ? userData.image : profileImg} onError={(e) => (e.target.src = profileImg)} alt="프로필 이미지" />
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

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserSearchContainer = styled.div`
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
