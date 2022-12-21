import styled from "styled-components";
import BasicNav from "../../../Components/Navbar/BasicNav";
import Comment from "../../../Components/Comment";
import HomePost from "../../../Components/HomePost";
import CommentItem from "./CommentItem/CommentItem";
import Modal from "../../../Components/Modal";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCookie } from "../../../cookie";
import { FETCH_COMMENT_DATA, FETCH_POST_DATA } from "../../../store/PostDetail";
import { useDispatch, useSelector } from "react-redux";

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
  const dispatch = useDispatch();
  const { postDetail } = useSelector((state) => state);
  const [selectComment, setSelectComment] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const token = getCookie("accessToken");

  function handleMoreIcon(commentId) {
    setIsOpen(true);
    setSelectComment(commentId);
  }

  async function handleDeleteComment(commentId) {
    try {
      const response = await fetch(`https://mandarin.api.weniv.co.kr/post/${id}/comments/${commentId}`, {
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
    dispatch(FETCH_POST_DATA({ id, token }));
    dispatch(FETCH_COMMENT_DATA({ id, token }));
  }, []);

  return (
    <>
      <BasicNav />
      <MainContainer>
        <PostContainer>{Object.keys(postDetail.post).length !== 0 && <HomePost postItem={postDetail.post} />}</PostContainer>
        <CommentContainer>
          <h2 className="ir-hidden">댓글창</h2>
          {postDetail.comments && postDetail.comments.map((comment) => <CommentItem key={comment.id} comment={comment} onClick={handleMoreIcon} />)}
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
