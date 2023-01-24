import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BasicProfileImg from "./ImageComponents/BasicProfileImg";
import IconMoreVerticalSmall from "../Components/icon/IconMoreVerticalSmall";
import IconHeart from "./icon/IconHeart";
import IconComment from "./icon/IconMessageCircleSmall";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_MODAL, SET_MAIN_MODAL, SET_SUB_MODAL } from "../store/Modal";
import { FETCH_POST_DATA } from "../store/PostDetail";
import ImageSlider from "./ImageSlider";
import {
  postDelete,
  postReport,
  clickHeart,
  clickUnHeart,
} from "../api/homepost";

function HomePost({ postItem, setModalInfo, setSubModalData, getPostList }) {
  const [postData, setPostData] = useState(postItem);
  const dispatch = useDispatch();
  const {
    userInfo: { userId },
  } = useSelector((state) => state);

  const createdAt = postItem.createdAt
    .slice(0, 11)
    .replace("-", "년 ")
    .replace("-", "월 ")
    .replace("T", "일");

  useEffect(() => {
    setPostData(postItem);
  }, [postItem]);

  async function handleDeletePost() {
    const data = await postDelete(postItem.id);
    alert(data.message);
    getPostList();
    dispatch(CLOSE_MODAL());
  }

  async function handleReportPost() {
    const report = await postReport(postItem.id);
    if (report) {
      alert("게시물이 신고 되었습니다.");
    } else {
      alert("신고가 정상적으로 되지 않았습니다.");
    }
    dispatch(CLOSE_MODAL());
  }

  function handleModalOpen() {
    if (userId === postData.author._id) {
      setModalInfo([
        {
          text: "삭제",
          handleFunc: () => {
            setSubModalData({
              text: "삭제하시겠습니까?",
              rightText: "삭제",
              handleFunc: handleDeletePost,
            });
            dispatch(SET_SUB_MODAL());
          },
        },
      ]);
    } else {
      setModalInfo([
        {
          text: "신고",
          handleFunc: () => {
            setSubModalData({
              text: "신고하시겠습니까?",
              rightText: "신고",
              handleFunc: handleReportPost,
            });
            dispatch(SET_SUB_MODAL());
          },
        },
      ]);
    }
    dispatch(SET_MAIN_MODAL());
  }

  async function handleHeartClick() {
    await clickHeart(postData.id);
    setPostData((prev) => ({
      ...prev,
      hearted: true,
      heartCount: postData.heartCount + 1,
    }));
    dispatch(FETCH_POST_DATA({ id: postData.id }));
  }

  async function handleUnHeartClick() {
    await clickUnHeart(postData.id);
    setPostData((prev) => ({
      ...prev,
      hearted: false,
      heartCount: postData.heartCount + -1,
    }));
    dispatch(FETCH_POST_DATA({ id: postData.id }));
  }

  return (
    <>
      <PostContainer>
        <TitleContainer>
          <Link to={`/profile/${postData.author.accountname}`}>
            <ProfileImg src={postData.author.image} />
          </Link>
          <Link to={`/profile/${postData.author.accountname}`}>
            <UserName>{postData.author.username}</UserName>
            <UserID>@ {postData.author.accountname}</UserID>
          </Link>
          <MoreIcon onClick={handleModalOpen} />
        </TitleContainer>
        <ContContainer>
          <Cont>{postData.content}</Cont>
          {!!postData.image && (
            <ImageSlider image={postData.image} postId={postData.id} />
          )}
          <ReactContainer>
            <IconContainer>
              <HeartIcon
                toggle={postData.hearted}
                onClick={
                  postData.hearted ? handleUnHeartClick : handleHeartClick
                }
              />
              {postData.heartCount}
            </IconContainer>
            <Link to={`/post/${postData.id}`}>
              <IconContainer>
                <CommentIcon />
                {postData.commentCount}
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
  width: 100%;
  max-width: 358px;
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
  overflow: hidden;
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
