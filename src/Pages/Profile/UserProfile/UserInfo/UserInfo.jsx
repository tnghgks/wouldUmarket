import styled from "styled-components";
import BasicProfileImg from "../../../../Components/BasicProfileImg";
import CommonButton from "../../../../Components/button/CommonButton";
import IconMessageCircle from "../../../../Components/icon/IconMessageCircle";
import { Link, useNavigate, useParams } from "react-router-dom";
import IconShare from "../../../../Components/icon/IconShare";
import { useEffect, useState } from "react";

function UserInfo({ user }) {
  const navigate = useNavigate();
  const { accountname } = useParams();
  const [data, setData] = useState({});
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTZlODNmMTdhZTY2NjU4MWMzNTJkZCIsImV4cCI6MTY3NjU0NTI4NSwiaWF0IjoxNjcxMzYxMjg1fQ.SQif90hSbfq7Rvl6Ge5dXG6Y_h9CF7M1lTwda8V4aT8";

  async function getUserData() {
    try {
      const res = await fetch(`https://mandarin.api.weniv.co.kr/profile/${accountname}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      const { profile } = await res.json();
      if (!profile) return navigate("/feed");
      setData(profile);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleFollowBtn() {
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
      getUserData();
    } catch (error) {
      console.log(error);
    }
  }
  async function handleUnFollowBtn() {
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
      getUserData();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    data && (
      <Container>
        <RowContainer>
          <Link>
            <FollowerInfo>
              <span>{data.followerCount}</span>
              <span>followers</span>
            </FollowerInfo>
          </Link>
          <BasicProfileImg src={data.image} />
          <Link>
            <FollowingInfo>
              <span>{data.followingCount}</span>
              <span>followings</span>
            </FollowingInfo>
          </Link>
        </RowContainer>
        <UserNicname>{data.username}</UserNicname>
        <UserId>@ {data.accountname}</UserId>
        <UserDiscription>{data.intro}</UserDiscription>
        <BtnContainer>
          <LinkBtn to="/chat/id">
            <IconMessageCircle />
          </LinkBtn>
          {data.isfollow ? (
            <CommonButton size="md" fontColor="#767676" bgColor="white" event={handleUnFollowBtn}>
              언팔로우
            </CommonButton>
          ) : (
            <CommonButton size="md" event={handleFollowBtn}>
              팔로우
            </CommonButton>
          )}

          <LinkBtn>
            <IconShare />
          </LinkBtn>
        </BtnContainer>
      </Container>
    )
  );
}
export default UserInfo;

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  margin-bottom: 6px;
  border: 0.5px solid #dbdbdb;
`;

const FollowerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 48px;
  gap: 6px;
  span:first-child {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.3rem;
  }
  span:nth-child(2) {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.2rem;
    color: #767676;
  }
`;
const FollowingInfo = styled(FollowerInfo)`
  color: #767676;
`;
const RowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 41px;
  margin-top: 30px;
`;

const UserNicname = styled.strong`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;
  margin-top: 16px;
`;
const UserId = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: #767676;
  margin-top: 6px;
`;
const UserDiscription = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.84rem;
  color: #767676;
  margin-top: 16px;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
  margin-bottom: 26px;
`;
const LinkBtn = styled(Link)`
  width: 34px;
  height: 34px;
  border: 1px solid #dbdbdb;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
  }
`;
