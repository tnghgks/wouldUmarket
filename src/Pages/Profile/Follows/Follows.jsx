import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import MainNav from "../../../Components/Navbar/MainNav";
import TabMenu from "../../../Components/TabMenu";
import UserFollow from "../../../Components/UserFollow";
import { getCookie } from "../../../cookie";
import { SET_FOLLOWER_LIST, SET_FOLLOWING_LIST } from "../../../store/Follow";

function Followers() {
  const dispatch = useDispatch();
  const token = getCookie("accessToken");
  const {
    followList: { users },
  } = useSelector((state) => state);
  const { accountname } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.split("/")[3] === "followers") {
      dispatch(SET_FOLLOWER_LIST({ accountname, token }));
    } else if (location.pathname.split("/")[3] === "followings") {
      dispatch(SET_FOLLOWING_LIST({ accountname, token }));
    }
  }, []);

  return (
    <>
      <MainNav titleContent="Follower" />
      <Container>
        <FollowContainer>{!!users.length && users.map((user) => <UserFollow key={crypto.randomUUID()} {...user} />)}</FollowContainer>
      </Container>
      <TabMenu />
    </>
  );
}
export default Followers;

const Container = styled.main`
  width: 100%;
  height: 100vh;
  margin-top: 48px;
  padding: 24px 16px;
`;
const FollowContainer = styled.section`
  width: 358px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
