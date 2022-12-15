import styled from "styled-components";
import SmallProfileImg from "../assets/Ellipse 6.png";
import ImgButton from "../assets/img-button.png";

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
  background-color: #ffffff;
`;

const CommentInput = styled.input`
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
  text-align: right;
  padding: 0;
  font-size: 1.4rem;
  font-weight: 500;
  color: #c4c4c4;
  cursor: pointer;
`;

const UploadImg = styled.div`
  width: 36px;
  height: 36px;
  background-image: url(${({img}) => (img ? ImgButton : SmallProfileImg)});
  background-repeat: no-repeat;
  background-position: center;
  cursor: ${({img}) => img ? "none" : "pointer"}

`;

/**
 *
 * @param {{img: null|"any" ; placeholder: "inputText" ; btn: "buttonText"}} param0
 * @returns
 */
function Comment({ img, placeholder, btn }) {
  return (
    <>
      <CommentContainer>
        <UploadImg img={img} />
        <CommentInput tpye="" placeholder={placeholder} />
        <CommentBtn>{btn}</CommentBtn>
      </CommentContainer>
    </>
  );
}

export default Comment;
