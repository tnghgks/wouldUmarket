import { useRef } from "react";
import styled from "styled-components";
import imgBtn from "../../assets/upload-file.png";

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
  &:hover {
    scale: 1.1;
    transition: scale 400ms;
  }
`;

export default function FileUploadBtn() {
  const inputRef = useRef();

  return (
    <Container>
      <Btn onClick={() => inputRef.current?.click()}>
        <img src={imgBtn} alt="사진추가버튼이미지" />
      </Btn>
      <input type="file" hidden ref={inputRef} />
    </Container>
  );
}
