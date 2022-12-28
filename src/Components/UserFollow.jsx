import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FollowButton from "../Components/button/CommonButton";
import { getCookie } from "../cookie";
import BasicProfileImg from "./BasicProfileImg";

function UserFollow({ username, accountname, isfollow, image }) {
  const [toggle, setToggle] = useState(isfollow);
  const token = getCookie("accessToken");

  async function handleFollowing() {
    try {
      const res = await fetch(`https://mandarin.api.weniv.co.kr/profile/${accountname}/follow`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      const { profile, message } = await res.json();
      if (!profile) return alert(message);

      setToggle(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUnFollowing() {
    try {
      const res = await fetch(`https://mandarin.api.weniv.co.kr/profile/${accountname}/unfollow`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      const { profile, message } = await res.json();
      if (!profile) return alert(message);

      setToggle(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserFollowContainer>
      <Link to={`/profile/${accountname}`}>
        <ProfileImg src={image} />
      </Link>
      <UserInfoContainer>
        <p>{username}</p>
        <UserFollowSmall>@ {accountname}</UserFollowSmall>
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

const ProfileImg = styled(BasicProfileImg)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex-shrink: 0;
`;
const UserInfoContainer = styled.div`
  width: 100%;
`;
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

const UserFollowSmall = styled.small`
  display: inline-block;
  font-size: 1.2rem;
  font-family: "LINESeedKR";
  margin-top: 6px;
`;
