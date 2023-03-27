import styled from "styled-components";
import { useEffect, useState } from "react";
import HomePost from "../../../components/HomePost";
import IconPostList from "../../../components/icon/IconPostList.jsx";
import IconPostAlbum from "../../../components/icon/IconPostAlbum.jsx";
import { getCookie } from "../../../cookie";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_USER_POSTS } from "../../../store/PostList";
import useInfinityScroll from "../../../lib/hooks/useInfinityScroll";

function UserPost() {
  const {
    postList: { posts },
  } = useSelector((state) => state);
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();
  const token = getCookie("accessToken");
  const { accountname } = useParams();
  const [setBottom, pageNum, resetPageNum] = useInfinityScroll();

  useEffect(() => {
    resetPageNum();
  }, [resetPageNum]);

  useEffect(() => {
    dispatch(SET_USER_POSTS({ accountname, token, pageNum }));
  }, [pageNum, accountname, dispatch, token]);

  const handleClick = (toggle) => {
    if (toggle) return;
    setToggle((prev) => !prev);
  };

  return (
    !!posts.length && (
      <Container>
        <h3 className="ir-hidden">유저가 올린 포스트</h3>
        <ViewModeContainer>
          <IconPostList toggle={toggle} onClick={handleClick} />
          <IconPostAlbum toggle={!toggle} onClick={handleClick} />
        </ViewModeContainer>
        <PostContainer>
          {posts.length && toggle ? (
            <>
              {posts.map((postItem, index) => (
                <HomePost key={index} postItem={postItem} />
              ))}
              <div ref={setBottom}></div>
            </>
          ) : (
            <AlbumContainer>
              {posts.map((postItem, index) =>
                postItem.image.split(",").map((img) => (
                  <Link to={`/post/${postItem.id}`} key={index}>
                    <img src={img} alt="POST 이미지" />
                  </Link>
                ))
              )}
            </AlbumContainer>
          )}
        </PostContainer>
      </Container>
    )
  );
}

export default UserPost;

const Container = styled.section`
  width: 100%;
  background-color: white;
  border: 0.5px solid #dbdbdb;
  padding-bottom: 14px;
`;

const ViewModeContainer = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  padding-right: 16px;
  border-bottom: 0.5px solid #dbdbdb;
`;
const PostContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-bottom: 61px;
`;
const AlbumContainer = styled.ul`
  display: grid;
  padding: 8px;
  margin: 0 auto;
  grid-template-columns: repeat(3, minmax(100px, 114px));
  grid-template-rows: repeat(3, minmax(100px, 114px));
  gap: 8px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
