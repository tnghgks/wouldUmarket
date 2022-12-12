import styled from "styled-components";
import SmallProfileImg from "./SmallBasicProfile";

const CommentContainer = styled.footer`
  width: 100%;
  padding: 13px 16px 12px;
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;
  align-items: center;
  font-size: 1.4rem;
  border-top: 0.5px solid #dbdbdb;
  box-sizing: border-box;
  gap: 18px;
  position: fixed;
  bottom: 0%;
`;

const CommentInput = styled.input`
  border: none;
  font-family: inherit;
  outline: none;
`;

const CommentBtn = styled.button`
  border: none;
  font-family: inherit;
  background-color: white;
  text-align: right;
  padding: 0;
  font-size: 1.4rem;
  font-weight: 500;
  color: #c4c4c4;
  cursor: pointer;
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
