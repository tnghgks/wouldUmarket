import styled from "styled-components";
import BasicNav from "../../../Components/Navbar/BasicNav";
import Comment from "../../../Components/Comment";
import HomePost from "../../../Components/HomePost";
import CommentItem from "./CommentItem/CommentItem";
import Modal from "../../../Components/Modal";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

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
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [selectComment, setSelectComment] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTZlODNmMTdhZTY2NjU4MWMzNTJkZCIsImV4cCI6MTY3NjU0NTI4NSwiaWF0IjoxNjcxMzYxMjg1fQ.SQif90hSbfq7Rvl6Ge5dXG6Y_h9CF7M1lTwda8V4aT8";

  async function getPostDetail() {
    try {
      const response = await fetch(`https://mandarin.api.weniv.co.kr/post/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const { post } = await response.json();
      setPost(post);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCommentData() {
    try {
      const response = await fetch(`https://mandarin.api.weniv.co.kr/post/${id}/comments`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const { comments } = await response.json();

      setComments(comments);
    } catch (error) {
      console.log(error);
    }
  }

  function handleMoreIcon(commentId) {
    setIsOpen(true);
    setSelectComment(commentId);
  }

  async function handleDeleteComment(commnetId) {
    try {
      const response = await fetch(`https://mandarin.api.weniv.co.kr/post/${id}/comments/${commnetId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (data.status === "403") {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPostDetail();
    getCommentData();
  }, []);

  return (
    <>
      <BasicNav />
      <MainContainer>
        <PostContainer>
          <HomePost post={post} />
        </PostContainer>
        <CommentContainer>
          <h2 className="ir-hidden">댓글창</h2>
          {comments && comments.map((comment) => <CommentItem key={comment.id} comment={comment} onClick={handleMoreIcon} />)}
        </CommentContainer>
      </MainContainer>
      <Comment />
      {isOpen && (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          modalInfo={[
            {
              text: "삭제",
              handleFunc: () => {
                handleDeleteComment(selectComment);
              },
            },
          ]}
        />
      )}
    </>
  );
}

export default PostDetail;
