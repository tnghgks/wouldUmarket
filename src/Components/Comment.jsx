import styled from "styled-components";
import SmallProfileImg from "./ImageComponents/SmallBasicProfile";
import { getCookie } from "../cookie";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_COMMENT } from "../store/PostDetail";

/**
 *
 * @param {{img: null|"any" ; placeholder: "inputText" ; btn: "buttonText"}} param0
 * @returns
 */
function Comment({ img, placeholder, btn, postId }) {
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const token = getCookie("accessToken");

  async function onSubmitComments(e) {
    e.preventDefault();
    try {
      const res = await fetch(`https://mandarin.api.weniv.co.kr/post/${postId}/comments`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          comment: {
            content: value,
          },
        }),
      });
      const { comment } = await res.json();

      dispatch(ADD_COMMENT(comment));
      setValue("");
    } catch (error) {
      console.log(error);
    }
  }
  function onChange(e) {
    setValue(e.target.value);
  }

  return (
    <CommentContainer>
      <FromContainer onSubmit={onSubmitComments}>
        <SmallProfileImg src={img} />
        <CommentInput type="text" value={value} onChange={onChange} placeholder={placeholder} />
        <CommentBtn value={!!value}>{btn}</CommentBtn>
      </FromContainer>
    </CommentContainer>
  );
}

export default Comment;

const CommentContainer = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  border-top: 0.5px solid #dbdbdb;
  background-color: #ffffff;
`;

const FromContainer = styled.form`
  width: 358px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 18px;
  padding: 13px 16px 12px;
  font-size: 1.4rem;
`;

const CommentInput = styled.input`
  flex-grow: 1;
  border: none;
  font-family: inherit;
  outline: none;
  ::placeholder {
    color: #c4c4c4;
  }
`;

const CommentBtn = styled.button`
  border: none;
  font-family: inherit;
  background-color: white;
  margin-left: auto;
  text-align: right;
  padding: 0;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${(props) => (props.value ? "var(--mainColor)" : "#c4c4c4")};
  cursor: pointer;
`;
