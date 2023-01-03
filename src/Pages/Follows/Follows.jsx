import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import ChatNav from "../../Components/Navbar/ChatNav";
import TabMenu from "../../Components/TabMenu";
import UserFollow from "../../Components/UserFollow";
import { getCookie } from "../../cookie";
import { SET_FOLLOWER_LIST, SET_FOLLOWING_LIST } from "../../store/Follow";

function Followers() {
  const dispatch = useDispatch();
  const token = getCookie("accessToken");
  const {
    followList: { users },
  } = useSelector((state) => state);
  const { accountname } = useParams();
  const location = useLocation();
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    getFollowData();

    let scrollTimer;
    window.addEventListener("scroll", () => {
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
      scrollTimer = setTimeout(function () {
        if (document.body.scrollHeight - (window.pageYOffset + window.innerHeight) < 0) {
          setLimit((prev) => prev + 20);
        }
      }, 100);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getFollowData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  function getFollowData() {
    if (location.pathname.split("/")[3] === "followers") {
      dispatch(SET_FOLLOWER_LIST({ accountname, token, limit }));
    } else if (location.pathname.split("/")[3] === "followings") {
      dispatch(SET_FOLLOWING_LIST({ accountname, token, limit }));
    }
  }

  return (
    <>
      <ChatNav sellerName="Follower" isMore={true} />
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
  margin-bottom: 61px;
`;
const FollowContainer = styled.section`
  width: 100%;
  max-width: 358px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
