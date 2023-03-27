import styled from "styled-components";
import BasicNav from "../../components/navbar/BasicNav";
import Comment from "../../components/Comment";
import HomePost from "../../components/HomePost";
import CommentItem from "./CommentItem/CommentItem";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCookie } from "../../lib/util/cookie";
import { FETCH_COMMENT_DATA, FETCH_POST_DATA } from "../../store/PostDetail";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";

function PostDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = getCookie("accessToken");
  const {
    postDetail: { post, comments, status },
    userInfo,
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(FETCH_POST_DATA({ id, token }));
    dispatch(FETCH_COMMENT_DATA({ id, token }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header>
        <BasicNav />
      </header>
      {status === "pending" ? (
        <Loader />
      ) : (
        <MainContainer>
          <h1 className="ir-hidden">게시물 상세</h1>
          <PostContainer>
            {Object.keys(post).length !== 0 && <HomePost postItem={post} />}
          </PostContainer>
          <CommentContainer>
            <h2 className="ir-hidden">댓글창</h2>
            {comments &&
              comments.map((comment) => <CommentItem key={comment.id} comment={comment} />)}
          </CommentContainer>
        </MainContainer>
      )}
      <Comment img={userInfo.image} placeholder="댓글 입력하기..." btn="게시" postId={post.id} />
    </>
  );
}

export default PostDetail;

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
