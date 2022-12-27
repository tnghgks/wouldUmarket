import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCookie } from "../../../cookie";
import SymbolLogoGray from "../../../Components/SymbolLogoGray";
import CommonButton from "../../../Components/button/CommonButton";
import HomePost from "../../../Components/HomePost";
import MainNav from "../../../Components/Navbar/MainNav";
import TabMenu from "../../../Components/TabMenu";
import { useDispatch } from "react-redux";
import { SET_USERINFO } from "../../../store/UserInfo";

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

function EmptyFeed() {
  const dispatch = useDispatch();
  const [post, setPost] = useState([]);
  const token = getCookie("accessToken");

  async function getData() {
    try {
      const res = await fetch("https://mandarin.api.weniv.co.kr/post/feed", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      const { posts } = await res.json();

      setPost(posts);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    dispatch(SET_USERINFO(token));
    getData();
  }, []);

  return (
    <>
      <MainNav titleContent="우주쉐어 피드" />
      <main>
        {!!post.length ? (
          post.map((postItem, index) => (
            <PostContainer>
              <HomePost key={index} postItem={postItem} getData={getData} />
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
      </main>
      <TabMenu />
    </>
  );
}

export default EmptyFeed;
