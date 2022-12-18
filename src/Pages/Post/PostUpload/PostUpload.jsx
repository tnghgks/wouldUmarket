import styled from "styled-components";
import UploadNav from "../../../Components/Navbar/UploadNav";
import imgBtn from "../../../assets/upload-file.png";
import profileImg from "../../../assets/basic-profile-img.png";
import FileUploadBtn from "../../../Components/button/FileUploadBtn";

const Container = styled.div`
  padding-top: 48px;
`;

const UploadContainer = styled.section`
  display: flex;
  height: auto;
  padding: 20px 16px 0 16px;
`;

const ProfileImg = styled.img`
  display: inline-block;
  width: 42px;
  height: 42px;
`;

const Textarea = styled.textarea`
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
`;

export default function PostUpload() {
  return (
    <Container>
      <UploadNav children="업로드" />
      <UploadContainer>
        <ProfileImg src={profileImg} />
        <Textarea placeholder="게시글 입력하기..."></Textarea>
      </UploadContainer>
      <FileUploadBtn />
    </Container>
  );
}
