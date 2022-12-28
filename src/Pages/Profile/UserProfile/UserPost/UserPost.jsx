import styled from "styled-components";
import { useState } from "react";
import HomePost from "../../../../Components/HomePost";
import IconPostList from "../../../../Components/icon/IconPostList.jsx";
import IconPostAlbum from "../../../../Components/icon/IconPostAlbum.jsx";
import { getCookie } from "../../../../cookie";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_USER_POSTS } from "../../../../store/PostList";

function UserPost({ setModalInfo, setSubModalData }) {
  const {
    postList: { posts },
  } = useSelector((state) => state);
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();
  const token = getCookie("accessToken");
  const { accountname } = useParams();

  const handleClick = (toggle) => {
    if (toggle) return;
    setToggle((prev) => !prev);
  };

  return (
    !!posts.length && (
      <Container>
        <ViewModeContainer>
          <IconPostList toggle={toggle} onClick={handleClick} />
          <IconPostAlbum toggle={!toggle} onClick={handleClick} />
        </ViewModeContainer>
        <PostContainer>
          {posts.length && toggle ? (
            posts.map((postItem, index) => (
              <HomePost
                key={index}
                postItem={postItem}
                setModalInfo={setModalInfo}
                setSubModalData={setSubModalData}
                getPostList={() => dispatch(SET_USER_POSTS({ accountname, token }))}
              />
            ))
          ) : (
            <AlbumContainer>{posts.map((postItem, index) => postItem.image.split(",").map((img) => <img key={index} src={img} alt="POST 이미지" />))}</AlbumContainer>
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
const PostContainer = styled.section`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const AlbumContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 114px);
  grid-template-rows: repeat(3, 114px);
  gap: 8px;
  img {
    width: 100%;
    height: 100%;
  }
`;
