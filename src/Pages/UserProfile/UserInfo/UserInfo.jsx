import styled from "styled-components";
import BasicProfileImg from "../../../Components/ImageComponents/BasicProfileImg";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FOLLOW, UN_FOLLOW } from "../../../store/Profile";
import FollowBtns from "../FollowBtns/FollowBtns";
import EditBtns from "../EditBtns/EditBtns";

function UserInfo() {
  const dispatch = useDispatch();
  const { accountname } = useParams();
  const {
    userInfo,
    profile: { profile },
  } = useSelector((state) => state);

  const ownUser = userInfo.userId === profile.userId;

  async function handleFollowBtn() {
    dispatch(FOLLOW(accountname));
  }
  async function handleUnFollowBtn() {
    dispatch(UN_FOLLOW(accountname));
  }

  return (
    !!profile && (
      <Container>
        <h3 className="ir-hidden">유저 정보</h3>
        <RowContainer>
          <Link to={`/profile/${accountname}/followers`}>
            <FollowerInfo>
              <span>{profile.followerCount}</span>
              <span>followers</span>
            </FollowerInfo>
          </Link>
          <BasicProfileImg src={profile.image} />
          <Link to={`/profile/${accountname}/followings`}>
            <FollowingInfo>
              <span>{profile.followingCount}</span>
              <span>followings</span>
            </FollowingInfo>
          </Link>
        </RowContainer>
        <UserNicname>{profile.username}</UserNicname>
        <UserId>@ {profile.accountname}</UserId>
        <UserDescription>{profile.intro}</UserDescription>
        {ownUser ? <EditBtns /> : <FollowBtns isFollow={profile.isfollow} handleFollow={handleFollowBtn} handleUnFollow={handleUnFollowBtn} />}
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
const UserDescription = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.84rem;
  color: #767676;
  margin-top: 16px;
`;
