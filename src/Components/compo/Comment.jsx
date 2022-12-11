import styled from "styled-components";
import SmallProfileImg from "../Small-basic-profile";

const CommentContainer = styled.section`
  width: 390px;
  padding: 13px 16px 12px;
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;
  align-items: center;
  font-size: 1.4rem;
  border-top: 0.5px solid #dbdbdb;
  box-sizing: border-box;
  gap: 18px;
`;

const CommentInput = styled.input`
  border: none;
  font-family: inherit;
`;

const CommentBtn = styled.button`
  border: none;
  font-family: inherit;
  background-color: white;
  text-align: right;
  padding: 0;
`;

function Comment() {
  return (
    <>
      <CommentContainer>
        <SmallProfileImg />
        <CommentInput tpye="" placeholder="댓글 입력하기..." />
        <CommentBtn>게시</CommentBtn>
      </CommentContainer>
    </>
  );
}

export default Comment;
