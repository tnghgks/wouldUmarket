import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import BasicProfileImg from "../Components/BasicProfileImg";
import IconMoreVerticalSmall from "../Components/icon/IconMoreVerticalSmall";
import IconHeart from "./icon/IconHeart";
import IconComment from "./icon/IconMessageCircleSmall";
import { getCookie } from "../cookie";
import { useDispatch } from "react-redux";
import { SET_MAIN_MODAL, SET_SUB_MODAL } from "../store/Modal";

function HomePost({ postItem, setModalInfo, setSubModalData }) {
  const { author, content, image, hearted, id: postId, heartCount, commentCount } = postItem;
  const dispatch = useDispatch();
  const [isLike, setIsLike] = useState(postItem.hearted);
  const token = getCookie("accessToken");

  const createdAt = postItem.createdAt.slice(0, 11).replace("-", "년 ").replace("-", "월 ").replace("T", "일");

  async function handleDeletePost() {
    try {
      const response = await fetch(`https://mandarin.api.weniv.co.kr/post/${postItem.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.log(error);
    }
  }

  function handleModalOpen() {
    dispatch(SET_MAIN_MODAL());

    setModalInfo([
      {
        text: "삭제",
        handleFunc: () => {
          setSubModalData((state) => {
            return { ...state, text: "삭제하시겠습니까?", rightText: "삭제", handleFunc: handleDeletePost };
          });
          dispatch(SET_SUB_MODAL());
        },
      },
    ]);
  }

  return (
    <>
      <PostContainer>
        <TitleContainer>
          <ProfileImg src={author.image} />
          <Link to={`/profile/${author.accountname}`}>
            <UserName>{author.username}</UserName>
            <UserID>@ {author.accountname}</UserID>
          </Link>
          <MoreIcon onClick={handleModalOpen} />
        </TitleContainer>
        <ContContainer>
          <Cont>{content}</Cont>
          {image ? (
            <Link to={`/post/${postId}`}>
              <PostImg src={image} />
            </Link>
          ) : null}
          <ReactContainer>
            <IconContainer>
              <HeartIcon toggle={hearted} />
              {heartCount}
            </IconContainer>
            <Link to={`/post/${postId}`}>
              <IconContainer>
                <CommentIcon />
                {commentCount}
              </IconContainer>
            </Link>
          </ReactContainer>
          <Date>{createdAt}</Date>
        </ContContainer>
      </PostContainer>
    </>
  );
}

export default HomePost;

const PostContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 358px;
  height: 434px;
  background-color: #ffffff;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;
const ProfileImg = styled(BasicProfileImg)`
  width: 42px;
  height: 42px;
`;

const MoreIcon = styled(IconMoreVerticalSmall)`
  margin-left: auto;
  margin-bottom: auto;
  margin-top: 3px;
  cursor: pointer;
`;

const ContContainer = styled.div`
  margin-left: 55px;
`;

const UserName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 5px;
`;

const UserID = styled.span`
  font-size: 1.2rem;
  color: #767676;
`;

const Cont = styled.p`
  font-size: 1.4rem;
  margin: 16px 0;
`;

const PostImg = styled.img`
  width: 304px;
  height: 208px;
  object-fit: cover;
  border-radius: 10px;
`;

const ReactContainer = styled.div`
  margin: 12px 0 16px;
  display: flex;
`;

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 1.2rem;
  color: #767676;
`;

const HeartIcon = styled(IconHeart)`
  width: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

const CommentIcon = styled(IconComment)`
  width: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

const Date = styled.p`
  color: #767676;
`;
