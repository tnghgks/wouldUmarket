import styled from "styled-components";
import { useState } from "react";
import HomePost from "../../../../Components/HomePost";
import IconPostList from "../../../../Components/icon/IconPostList.jsx";
import IconPostAlbum from "../../../../Components/icon/IconPostAlbum.jsx";

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
  const [toggle, setToggle] = useState(true);

  const handleClick = (toggle) => {
    if (toggle) return;
    setToggle((prev) => !prev);
  };

  const post = [
    {
      id: "62e54bd117ae6665813aa38e",
      content: "👏🏻",
      image: "https://mandarin.api.weniv.co.kr/1659194321350.jpg",
      createdAt: "2022-07-30T15:18:41.564Z",
      updatedAt: "2022-07-31T08:01:38.610Z",
      hearted: false,
      heartCount: 2,
      comments: [],
      commentCount: 0,
      author: {
        _id: "62e4fbd917ae6665812809e4",
        username: "조소과 김썸머",
        accountname: "summer",
        intro: "조소과 김썸머입니다",
        image: "https://mandarin.api.weniv.co.kr/1659173849158.jpg",
        isfollow: false,
        following: ["62e4f77717ae666581267c0f", "62cbc52b82fdcc712f438829", "62e4fbf017ae6665812812ac", "62e4fc1917ae66658128206b", "62e4b48f17ae6665810ce964"],
        follower: ["62e4fbf017ae6665812812ac", "62e4fc1917ae66658128206b", "6374a40017ae666581bd966c"],
        followerCount: 3,
        followingCount: 5,
      },
    },
    {
      id: "62e54b1617ae6665813a9ec7",
      content: "귀엽다",
      image: "https://mandarin.api.weniv.co.kr/1659194134226.jpg",
      createdAt: "2022-07-30T15:15:34.452Z",
      updatedAt: "2022-07-31T07:59:59.088Z",
      hearted: false,
      heartCount: 2,
      comments: [
        "62e6090a17ae6665813cb96d",
        "62e60c3917ae6665813cbd04",
        "62e60c4317ae6665813cbd17",
        "62e60fff17ae6665813cc46e",
        "62e6145217ae6665813cd945",
        "62e61f3c17ae6665813daa4c",
        "62e6200217ae6665813db13a",
        "62e6205f17ae6665813db376",
      ],
      commentCount: 8,
      author: {
        _id: "62e4fbd917ae6665812809e4",
        username: "조소과 김썸머",
        accountname: "summer",
        intro: "조소과 김썸머입니다",
        image: "https://mandarin.api.weniv.co.kr/1659173849158.jpg",
        isfollow: false,
        following: ["62e4f77717ae666581267c0f", "62cbc52b82fdcc712f438829", "62e4fbf017ae6665812812ac", "62e4fc1917ae66658128206b", "62e4b48f17ae6665810ce964"],
        follower: ["62e4fbf017ae6665812812ac", "62e4fc1917ae66658128206b", "6374a40017ae666581bd966c"],
        followerCount: 3,
        followingCount: 5,
      },
    },
    {
      id: "62e4fcd117ae66658128631b",
      content: "작업하러 갑시당",
      image: "https://mandarin.api.weniv.co.kr/1659174097216.jpg",
      createdAt: "2022-07-30T09:41:37.433Z",
      updatedAt: "2022-08-01T03:38:08.272Z",
      hearted: false,
      heartCount: 4,
      comments: [],
      commentCount: 0,
      author: {
        _id: "62e4fbd917ae6665812809e4",
        username: "조소과 김썸머",
        accountname: "summer",
        intro: "조소과 김썸머입니다",
        image: "https://mandarin.api.weniv.co.kr/1659173849158.jpg",
        isfollow: false,
        following: ["62e4f77717ae666581267c0f", "62cbc52b82fdcc712f438829", "62e4fbf017ae6665812812ac", "62e4fc1917ae66658128206b", "62e4b48f17ae6665810ce964"],
        follower: ["62e4fbf017ae6665812812ac", "62e4fc1917ae66658128206b", "6374a40017ae666581bd966c"],
        followerCount: 3,
        followingCount: 5,
      },
    },
    {
      id: "62e4fc4617ae6665812830ec",
      content: "오늘도 내일도 야작",
      image: "https://mandarin.api.weniv.co.kr/1659173958059.jpg",
      createdAt: "2022-07-30T09:39:18.249Z",
      updatedAt: "2022-07-30T13:32:26.738Z",
      hearted: false,
      heartCount: 2,
      comments: [],
      commentCount: 0,
      author: {
        _id: "62e4fbd917ae6665812809e4",
        username: "조소과 김썸머",
        accountname: "summer",
        intro: "조소과 김썸머입니다",
        image: "https://mandarin.api.weniv.co.kr/1659173849158.jpg",
        isfollow: false,
        following: ["62e4f77717ae666581267c0f", "62cbc52b82fdcc712f438829", "62e4fbf017ae6665812812ac", "62e4fc1917ae66658128206b", "62e4b48f17ae6665810ce964"],
        follower: ["62e4fbf017ae6665812812ac", "62e4fc1917ae66658128206b", "6374a40017ae666581bd966c"],
        followerCount: 3,
        followingCount: 5,
      },
    },
  ];
  return (
    <Container>
      <ViewModeContainer>
        <IconPostList toggle={toggle} onClick={handleClick} />
        <IconPostAlbum toggle={!toggle} onClick={handleClick} />
      </ViewModeContainer>
      <PostContainer>
        {post.length && toggle ? (
          post.map((postItem) => <HomePost />)
        ) : (
          <AlbumContainer>
            {post.map((postItem) => (
              <img src={postItem.image} alt="POST 이미지" />
            ))}
          </AlbumContainer>
        )}
      </PostContainer>
    </Container>
  );
}

export default UserPost;
