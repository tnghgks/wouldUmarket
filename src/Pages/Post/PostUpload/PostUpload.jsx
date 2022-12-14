import styled from "styled-components";
import BasicProfileImg from "../../../Components/BasicProfileImg";
import UploadNav from "../../../Components/Navbar/UploadNav";
import imgBtn from "../../../assets/upload-file.png";

const Container = styled.div`
  padding-top: 48px;
  & > .uploadContainer {
    display: flex;
    height: auto;
    padding: 20px 16px 0 16px;

    & > .profileImg {
      display: inline-block;
      width: 42px;
      height: 42px;
    }
    & > .textArea {
      height: 500px;
      width: 100%;
      margin: 12px 0 0 12px;
      border: none;
      font-family: "LINESeedKR-Bd";
      font-size: 1.4rem;
      line-height: 1.753rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #c4c4c4;
      }
    }
  }
  & > .addBtn {
    position: fixed;
    bottom: 16px;
    right: 16px;
    border: none;
    background-color: initial;
    cursor: pointer;
  }
`;

export default function PostUpload() {
  return (
    <Container>
      <UploadNav children="업로드" />
      <div className="uploadContainer">
        <BasicProfileImg className={"profileImg"} />
        <textarea
          className="textArea"
          placeholder="게시글 입력하기..."
        ></textarea>
      </div>
      <button className="addBtn" type="button">
        <img className="addBtnImg" src={imgBtn} alt="사진추가버튼이미지" />
      </button>
    </Container>
  );
}
