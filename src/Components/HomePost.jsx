import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import BasicProfileImg from "../Components/BasicProfileImg";
import IconMoreVerticalSmall from "../Components/icon/IconMoreVerticalSmall";
import IconHeart from "./icon/IconHeart";
import IconComment from "./icon/IconMessageCircleSmall";
import IconEmptyHeart from "../assets/icon/icon-heart-active.png";

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
function HomePost({ postItem }) {
  const [isLike, setIsLike] = useState(postItem.hearted);
  const createdAt = postItem.createdAt
    .slice(0, 11)
    .replace("-", "년 ")
    .replace("-", "월 ")
    .replace("T", "일");
  return (
    <PostContainer>
      <TitleContainer>
        <ProfileImg />
        <Link to={`/profile/${postItem.author.accountname}`}>
          <UserName>{postItem.author.username}</UserName>
          <UserID>@ {postItem.author.accountname}</UserID>
        </Link>
        <MoreIcon />
      </TitleContainer>
      <ContContainer>
        <Cont>{postItem.content}</Cont>
        {postItem.image ? (
          <Link to={`/post/${postItem.id}`}>
            <PostImg src={postItem.image} />
          </Link>
        ) : null}
        <ReactContainer>
          <IconContainer>
            <HeartIcon />
            58
          </IconContainer>
          <Link to={`/post/${postItem.id}`}>
            <IconContainer>
              <CommentIcon />
              12
            </IconContainer>
          </Link>
        </ReactContainer>
        <Date>{createdAt}</Date>
      </ContContainer>
    </PostContainer>
  );
}

export default HomePost;
