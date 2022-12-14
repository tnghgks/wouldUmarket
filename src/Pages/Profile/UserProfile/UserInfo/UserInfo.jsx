import styled from "styled-components";
import BasicProfileImg from "../../../../Components/BasicProfileImg";
import CommonButton from "../../../../Components/button/CommonButton";
import IconMessageCircle from "../../../../Components/icon/IconMessageCircle";
import { Link } from "react-router-dom";
import IconShare from "../../../../Components/icon/IconShare";
import { useEffect, useState } from "react";

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
function UserInfo({ user }) {
  const [data, setData] = useState({
    _id: "62e4333917ae66658100b69a",
    username: "김마타",
    accountname: "mataa",
    intro: "하쿠나마타타",
    image: "https://mandarin.api.weniv.co.kr/1659122486661.jpeg",
    isfollow: false,
    following: ["62d9f51017ae66658184fb47", "62e3407717ae666581dd9d78", "62e4ac1117ae6665810b6057"],
    follower: ["62e435d317ae666581010a2f", "62b0237a5361aaea569aa879", "62e4ac1117ae6665810b6057", "63801e2617ae666581be782d"],
    followerCount: 4,
    followingCount: 3,
  });

  // useEffect(() => {
  //   (async function () {
  //     try {
  //       const res = await fetch(`https://mandarin.api.weniv.co.kr/profile/mataa`, {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-type": "application/json",
  //         },
  //       });
  //       const { profile } = await res.json();
  //       setData(profile);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

  return (
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
          <CommonButton size="md" fontColor="#767676" bgColor="white">
            언팔로우
          </CommonButton>
        ) : (
          <CommonButton size="md">팔로우</CommonButton>
        )}

        <LinkBtn>
          <IconShare />
        </LinkBtn>
      </BtnContainer>
    </Container>
  );
}
export default UserInfo;
