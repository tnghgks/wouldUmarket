import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import SymbolLogoGray from "../../components/logo/SymbolLogoGray";
import CommonButton from "../../components/button/CommonButton";
import HomePost from "../../components/HomePost";
import MainNav from "../../components/navbar/MainNav";
import TabMenu from "../../components/TabMenu";
import { useDispatch, useSelector } from "react-redux";
import { SET_FOLLOWERS_POSTS } from "../../store/PostList";
import useInfinityScroll from "../../hooks/useInfinityScroll";
import Loader from "../../components/Loader";

function Feed() {
  const [setBottom, pageNum, resetPageNum] = useInfinityScroll();
  const dispatch = useDispatch();
  const {
    postList: { posts, status },
  } = useSelector((state) => state);

  useEffect(() => {
    resetPageNum();
    dispatch(SET_FOLLOWERS_POSTS());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(SET_FOLLOWERS_POSTS({ pageNum }));
  }, [dispatch, pageNum]);

  return (
    <>
      <header>
        <h1 className="ir-hidden">우주쉐어 피드</h1>
        <MainNav titleContent="우주쉐어 피드" />
      </header>
      {status === "pending" && pageNum === 1 ? (
        <Loader />
      ) : (
        <MainContainer>
          {!!posts.length ? (
            <>
              {posts.map((postItem) => (
                <PostContainer key={postItem.id}>
                  <HomePost key={postItem.id} postItem={postItem} />
                </PostContainer>
              ))}
              <div ref={setBottom}></div>
            </>
          ) : (
            <FeedContainer>
              <h3 className="ir-hidden">유저 검색하기</h3>
              <SymbolLogoGray />
              <Desc>유저를 검색해 팔로우 해보세요!</Desc>
              <Link to={`/search`}>
                <CommonButton size="md" bgColor="main" children="검색하기" />
              </Link>
            </FeedContainer>
          )}
        </MainContainer>
      )}
      <TabMenu />
    </>
  );
}

export default Feed;

const MainContainer = styled.main`
  padding-bottom: 100px;
  padding: 8px;
`;

const FeedContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 20px;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 68px;
`;

const Desc = styled.p`
  font-size: 1.4rem;
  color: #767676;
`;
