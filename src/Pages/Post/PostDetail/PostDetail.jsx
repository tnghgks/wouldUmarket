import styled from "styled-components";
import Comment from "../../../Components/Comment";
import HomePost from "../../../Components/HomePost";
import Navbar from "../../../Components/Navbar";
import CommentItem from "./CommentItem/CommentItem";

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  padding: 48px 0px;
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
      <Navbar leftType="back" rightType="more" />
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
