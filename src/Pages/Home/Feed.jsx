import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCookie } from "../../cookie";
import SymbolLogoGray from "../../Components/Logo/SymbolLogoGray";
import CommonButton from "../../Components/Button/CommonButton";
import HomePost from "../../Components/HomePost";
import MainNav from "../../Components/Navbar/MainNav";
import TabMenu from "../../Components/TabMenu";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Components/Modal";
import DeleteAlert from "../../Components/Button/DeleteAlert";
import { SET_FOLLOWERS_POSTS } from "../../store/PostList";
import useInfinityScroll from "../../Hooks/useInfinityScroll";
import Loader from "../../Components/Loader";

function Feed() {
  const [subModalData, setSubModalData] = useState({});
  const [modalInfo, setModalInfo] = useState([]);
  const [setBottom, pageNum, resetPageNum] = useInfinityScroll();
  const dispatch = useDispatch();
  const token = getCookie("accessToken");
  const {
    modalData: { isOpen, subModal },
    postList: { posts, status },
  } = useSelector((state) => state);

  useEffect(() => {
    resetPageNum();
    dispatch(SET_FOLLOWERS_POSTS({ token }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(SET_FOLLOWERS_POSTS({ token, pageNum }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

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
                  <HomePost key={postItem.id} postItem={postItem} setSubModalData={setSubModalData} setModalInfo={setModalInfo} />
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
      {isOpen && <Modal modalInfo={modalInfo} />}
      {subModal.isOpen && <DeleteAlert mainText={subModalData.text} rightText={subModalData.rightText} handleAccept={subModalData.handleFunc} />}
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
