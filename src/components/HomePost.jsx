import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BasicProfileImg from "./imageComponents/BasicProfileImg";
import IconMoreVerticalSmall from "../components/icon/IconMoreVerticalSmall";
import IconHeart from "./icon/IconHeart";
import IconComment from "./icon/IconMessageCircleSmall";
import { useDispatch } from "react-redux";
import { FETCH_POST_DATA } from "../store/PostDetail";
import ImageSlider from "./ImageSlider";
import { ClickHeart, ClickUnHeart } from "../api/homepost";
import { OPEN_MAIN_MODAL } from "../store/Modal";

function HomePost({ postItem }) {
  const [postData, setPostData] = useState(postItem);
  const dispatch = useDispatch();

  const createdAt = postItem.createdAt
    .slice(0, 11)
    .replace("-", "년 ")
    .replace("-", "월 ")
    .replace("T", "일");

  useEffect(() => {
    setPostData(postItem);
  }, [postItem]);

  function handleModalOpen() {
    dispatch(OPEN_MAIN_MODAL({ modalType: "POST_MODAL", target: postItem }));
  }

  async function handleHeartClick() {
    await ClickHeart(postData.id);
    setPostData((prev) => ({
      ...prev,
      hearted: true,
      heartCount: postData.heartCount + 1,
    }));
    dispatch(FETCH_POST_DATA({ id: postData.id }));
  }

  async function handleUnHeartClick() {
    await ClickUnHeart(postData.id);
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
        <h2 className="ir-hidden">메인 게시물</h2>
        <TitleContainer>
          <Link to={`/profile/${postData.author.accountname}`}>
            <ProfileImg src={postData.author.image} alt="프로필 이미지" />
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
          <ReactContainer>
            <IconContainer>
              <HeartIcon
                toggle={postData.hearted}
                onClick={postData.hearted ? handleUnHeartClick : handleHeartClick}
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
