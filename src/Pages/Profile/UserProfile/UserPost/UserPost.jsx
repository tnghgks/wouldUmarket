import styled from "styled-components";
import { useEffect, useState } from "react";
import HomePost from "../../../../Components/HomePost";
import IconPostList from "../../../../Components/icon/IconPostList.jsx";
import IconPostAlbum from "../../../../Components/icon/IconPostAlbum.jsx";
import { useSelector } from "react-redux";
import { getCookie } from "../../../../cookie";

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

function UserPost() {
  const [post, setPost] = useState([]);
  const [toggle, setToggle] = useState(true);
  const token = getCookie("accessToken");

  const { profile } = useSelector((state) => state);

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
    getData();
  }, []);

  const handleClick = (toggle) => {
    if (toggle) return;
    setToggle((prev) => !prev);
  };

  return (
    !!post.length && (
      <Container>
        <ViewModeContainer>
          <IconPostList toggle={toggle} onClick={handleClick} />
          <IconPostAlbum toggle={!toggle} onClick={handleClick} />
        </ViewModeContainer>
        <PostContainer>
          {post.length && toggle ? (
            post.map((postItem, index) => <HomePost key={index} postItem={postItem} />)
          ) : (
            <AlbumContainer>
              {post.map((postItem, index) => (
                <img key={index} src={postItem.image} alt="POST 이미지" />
              ))}
            </AlbumContainer>
          )}
        </PostContainer>
      </Container>
    )
  );
}

export default UserPost;
