import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BasicProfileImg from "../Components/BasicProfileImg";
import IconMoreVerticalSmall from "../Components/icon/IconMoreVerticalSmall";
import IconHeart from "./icon/IconHeart";
import IconComment from "./icon/IconMessageCircleSmall";
import { getCookie } from "../cookie";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_MODAL, SET_MAIN_MODAL, SET_SUB_MODAL } from "../store/Modal";
import { FETCH_POST_DATA } from "../store/PostDetail";
import ImageSlider from "./ImageSlider";
import { SET_USER_POSTS } from "../store/PostList";

function HomePost({ postItem, setModalInfo, setSubModalData, getPostList }) {
  const [postData, setPostData] = useState(postItem);
  // const { author, content, image, hearted, id: postId, heartCount, commentCount } = postItem;
  const token = getCookie("accessToken");
  const dispatch = useDispatch();
  const {
    userInfo: { userId },
  } = useSelector((state) => state);

  const createdAt = postItem.createdAt.slice(0, 11).replace("-", "년 ").replace("-", "월 ").replace("T", "일");

  useEffect(() => {
    setPostData(postItem);
  }, [postItem]);

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

      getPostList();
      dispatch(CLOSE_MODAL());
    } catch (error) {
      console.log(error);
    }
  }

  async function handleReportPost() {
    try {
      const response = await fetch(`https://mandarin.api.weniv.co.kr/post/${postItem.id}/report`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const { report } = await response.json();
      if (report) {
        alert("게시물이 신고 되었습니다.");
      } else {
        alert("신고가 정상적으로 되지 않았습니다.");
      }
      dispatch(CLOSE_MODAL());
    } catch (error) {
      console.log(error);
    }
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
    try {
      await fetch(`https://mandarin.api.weniv.co.kr/post/${postData.id}/heart`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      setPostData((prev) => ({ ...prev, hearted: true, heartCount: postData.heartCount + 1 }));

      dispatch(FETCH_POST_DATA({ id: postData.id, token }));
    } catch (error) {
      console.log(error);
    }
  }
  async function handleUnHeartClick() {
    try {
      await fetch(`https://mandarin.api.weniv.co.kr/post/${postData.id}/unheart`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });

      setPostData((prev) => ({ ...prev, hearted: false, heartCount: postData.heartCount + -1 }));

      dispatch(FETCH_POST_DATA({ id: postData.id, token }));
    } catch (error) {
      console.log(error);
    }
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
          {!!postData.image && <ImageSlider image={postData.image} postId={postData.id} />}
          {/* <ImageContainer>
            {!!image &&
              image.split(",").map((img) => (
                <Link to={`/post/${postId}`} key={crypto.randomUUID()}>
                  <PostImg src={img} key={crypto.randomUUID()} />
                </Link>
              ))}
          </ImageContainer> */}
          <ReactContainer>
            <IconContainer>
              <HeartIcon toggle={postData.hearted} onClick={postData.hearted ? handleUnHeartClick : handleHeartClick} />
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
  width: 358px;
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
