import styled from "styled-components";
import BasicNav from "../../../Components/BasicNav";
import Comment from "../../../Components/Comment";
import HomePost from "../../../Components/HomePost";
import CommentItem from "./CommentItem/CommentItem";

const MainContainer = styled.main`
  width: 100%;
  margin-top: 48px;
  margin-bottom: 61px;
`;
const PostContainer = styled.section`
  border-top: 1px solid #dbdbdb;
  width: 100%;
  padding: 20px 16px;
  display: flex;
  justify-content: center;
`;

const CommentContainer = styled.section`
  border-top: 1px solid #dbdbdb;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 0px;
`;

function PostDetail() {
  return (
    <>
      <BasicNav />
      <MainContainer>
        <PostContainer>
          <HomePost />
        </PostContainer>
        <CommentContainer>
          <h2 className="ir-hidden">댓글창</h2>
          <CommentItem></CommentItem>
          <CommentItem></CommentItem>
          <CommentItem></CommentItem>
        </CommentContainer>
      </MainContainer>
      <Comment />
    </>
  );
}

export default PostDetail;
