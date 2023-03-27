import styled from "styled-components";
import uploadFile from "../assets/upload-file.png";

const Img = styled.img`
  width: 50px;
  height: 50px;
`;

function UploadFile({ className }) {
  return <Img className={className} src={uploadFile} alt="업로드 파일 아이콘" />;
}
export default UploadFile;
