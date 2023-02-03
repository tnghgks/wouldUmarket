import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FollowButton from "./Button/CommonButton";
import BasicProfileImg from "./ImageComponents/BasicProfileImg";
import { follow, unFollow } from "../api/profile";

function UserFollow({ username, accountname, isfollow, image }) {
  const [toggle, setToggle] = useState(isfollow);

  async function handleFollowing() {
    const isSuccess = await follow(accountname);
    if (isSuccess) {
      setToggle(true);
    }
  }

  async function handleUnFollowing() {
    const isSuccess = await unFollow(accountname);
    if (isSuccess) {
      setToggle(false);
    }
  }

  return (
    <UserFollowContainer>
      <Link to={`/profile/${accountname}`}>
        <ProfileImg src={image} alt={`${username}님의 프로필 이미지`} />
      </Link>
      <UserInfoContainer>
        <p tabIndex={0}>{username}</p>
        <UserFollowSmall tabIndex={0}>@ {accountname}</UserFollowSmall>
      </UserInfoContainer>
      {toggle ? (
        <FollowButton size="sm" fontColor="#767676" bgColor="white" children="취소" onClick={handleUnFollowing} />
      ) : (
        <FollowButton size="sm" fontColor="white" bgColor="main" children="팔로우" onClick={handleFollowing} />
      )}
    </UserFollowContainer>
  );
}

export default UserFollow;

const UserFollowContainer = styled.li`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  font-size: 1.4rem;
  font-family: "Godo";
  background-color: #ffffff;
`;
const ProfileImg = styled(BasicProfileImg)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex-shrink: 0;
`;
const UserInfoContainer = styled.div`
  width: 100%;
`;

const UserFollowSmall = styled.small`
  display: inline-block;
  font-size: 1.2rem;
  font-family: "LINESeedKR";
  margin-top: 6px;
`;
