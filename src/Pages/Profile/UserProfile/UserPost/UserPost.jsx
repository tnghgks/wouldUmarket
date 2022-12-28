import styled from "styled-components";
import { useEffect, useState } from "react";
import HomePost from "../../../../Components/HomePost";
import IconPostList from "../../../../Components/icon/IconPostList.jsx";
import IconPostAlbum from "../../../../Components/icon/IconPostAlbum.jsx";
import { getCookie } from "../../../../cookie";
import { useParams } from "react-router-dom";

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

function UserPost({ setModalInfo, setSubModalData }) {
  const [post, setPost] = useState([]);
  const [toggle, setToggle] = useState(true);
  const token = getCookie("accessToken");
  const { accountname } = useParams();

  async function getData() {
    try {
      const res = await fetch(`https://mandarin.api.weniv.co.kr/post/${accountname}/userpost`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      const { post } = await res.json();

      setPost(post);
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
            post.map((postItem, index) => <HomePost key={index} postItem={postItem} setModalInfo={setModalInfo} setSubModalData={setSubModalData} />)
          ) : (
            <AlbumContainer>{post.map((postItem, index) => postItem.image.split(",").map((img) => <img key={index} src={img} alt="POST 이미지" />))}</AlbumContainer>
          )}
        </PostContainer>
      </Container>
    )
  );
}

export default UserPost;
