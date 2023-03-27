import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import ChatNav from "../../components/navbar/ChatNav";
import TabMenu from "../../components/TabMenu";
import UserFollow from "../../components/UserFollow";
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
    let pageType = location.pathname.split("/")[3];
    if (pageType === "followers") {
      dispatch(SET_FOLLOWER_LIST({ accountname, token, limit }));
    } else if (pageType === "followings") {
      dispatch(SET_FOLLOWING_LIST({ accountname, token, limit }));
    }
  }

  return (
    <main>
      <h1 className="ir-hidden">{location.pathname.split("/")[3]} 페이지</h1>
      <ChatNav sellerName={location.pathname.split("/")[3]} isMore={true} />
      <Container>
        <h2 className="ir-hidden">유저 목록</h2>
        <FollowContainer>
          {!!users.length &&
            users.map((user) => <UserFollow key={crypto.randomUUID()} {...user} />)}
        </FollowContainer>
      </Container>
      <TabMenu />
    </main>
  );
}
export default Followers;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  margin-top: 48px;
  padding: 24px 16px;
  margin-bottom: 61px;
`;
const FollowContainer = styled.ul`
  width: 100%;
  max-width: 358px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
