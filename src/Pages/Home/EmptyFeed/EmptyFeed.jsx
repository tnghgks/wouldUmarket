import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCookie } from "../../../cookie";
import SymbolLogoGray from "../../../Components/SymbolLogoGray";
import CommonButton from "../../../Components/button/CommonButton";
import HomePost from "../../../Components/HomePost";
import MainNav from "../../../Components/Navbar/MainNav";
import TabMenu from "../../../Components/TabMenu";
import { useDispatch, useSelector } from "react-redux";
import { SET_USERINFO } from "../../../store/UserInfo";
import Modal from "../../../Components/Modal";
import DeleteAlert from "../../../Components/DeleteAlert";
import { SET_FOLLOWERS_POSTS, INCREASE_PAGE_NUMBER, INITIAL_PAGE_NUMBER } from "../../../store/PostList";

function EmptyFeed() {
  const [subModalData, setSubModalData] = useState({});
  const [modalInfo, setModalInfo] = useState([]);
  const dispatch = useDispatch();
  const token = getCookie("accessToken");
  const {
    modalData: { isOpen, subModal },
    postList: { posts, pageNum },
  } = useSelector((state) => state);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(INITIAL_PAGE_NUMBER());
    dispatch(SET_USERINFO(token));
    dispatch(SET_FOLLOWERS_POSTS({ token, pageNum }));
    let scrollTimer;

    function handleScrollEvent() {
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
      scrollTimer = setTimeout(function () {
        if (document.body.scrollHeight - (window.pageYOffset + window.innerHeight) < 0) {
          dispatch(INCREASE_PAGE_NUMBER());
        }
      }, 100);
    }

    window.addEventListener("scroll", handleScrollEvent);

    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  useEffect(() => {
    dispatch(SET_FOLLOWERS_POSTS({ token, pageNum }));
  }, [pageNum]);

  return (
    <>
      <MainNav titleContent="우주쉐어 피드" />
      <MainContainer>
        {!!posts.length ? (
          posts.map((postItem) => (
            <PostContainer key={postItem.id}>
              <HomePost key={postItem.id} postItem={postItem} setSubModalData={setSubModalData} setModalInfo={setModalInfo} />
            </PostContainer>
          ))
        ) : (
          <FeedContainer>
            <SymbolLogoGray />
            <Desc>유저를 검색해 팔로우 해보세요!</Desc>
            <Link to={`/search`}>
              <CommonButton size="md" bgColor="main" children="검색하기" />
            </Link>
          </FeedContainer>
        )}
      </MainContainer>
      <TabMenu />
      {isOpen && <Modal modalInfo={modalInfo} />}
      {subModal.isOpen && <DeleteAlert mainText={subModalData.text} rightText={subModalData.rightText} handleAccept={subModalData.handleFunc} />}
    </>
  );
}

export default EmptyFeed;

const MainContainer = styled.main`
  padding-bottom: 100px;
`;

const FeedContainer = styled.div`
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
