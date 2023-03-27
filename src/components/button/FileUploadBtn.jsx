import { useRef } from "react";
import styled from "styled-components";
import imgBtn from "../../assets/upload-file.png";

/**
 * @param {{onChangeImage:import('react').ChangeEventHandler<HTMLInputElement> }} param0
 */
function FileUploadBtn({ onChangeImage }) {
  const inputRef = useRef();

  return (
    <Container>
      <Btn onClick={() => inputRef.current?.click()}>
        <img src={imgBtn} alt="사진추가버튼이미지" />
      </Btn>
      <input ref={inputRef} multiple type="file" accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic" hidden onChange={onChangeImage} />
    </Container>
  );
}
export default FileUploadBtn;

const Container = styled.div`
  width: 50px;
  height: 50px;
`;
const Btn = styled.button`
  position: fixed;
  right: 16px;
  bottom: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
