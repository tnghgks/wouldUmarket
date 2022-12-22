import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import UploadNav from "../../../Components/Navbar/UploadNav";
import profileImg from "../../../assets/basic-profile-img.png";
import FileUploadBtn from "../../../Components/button/FileUploadBtn";
import IconDelete from "../../../Components/icon/IconDelete";

const Container = styled.div`
  padding-top: 48px;
  min-height: 100vh;
`;

const UploadContainer = styled.section`
  display: flex;
  height: 100%;
  padding: 20px 16px;
`;

const InputContainer = styled.section`
  width: 100%;
  /* padding: 16px; */
`;

const ProfileImg = styled.img`
  display: inline-block;
  width: 42px;
  height: 42px;
  margin-right: 12px;
`;

const Textarea = styled.textarea`
  width: 100%;
  margin: 12px 0 16px 0;
  border: none;
  font-family: "LINESeedKR-Bd";
  font-size: 1.4rem;
  line-height: 1.753rem;
  resize: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #c4c4c4;
  }
`;

const ImageList = styled.ol`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const DeleteBtn = styled.button`
  background-color: transparent;
  position: absolute;
  top: 6px;
  right: 6px;
  z-index: 1;
  border: none;
  cursor: pointer;
`;

const Image = styled.img`
  object-fit: cover;
  border-radius: 10px;
`;

export default function PostUpload() {
  //이미지를 여러장 업로드 하기 위해서 배열로 설정
  const [imageList, setImageList] = useState([]);
  const textareaRef = useRef();
  //textarea height자동 조절
  const handleResizeHeight = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };
  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  const onChangeImage = async (e) => {
    const { files } = e.target;
    console.log(imageList);
    if (files.length > 3 || imageList.length > 2) {
      alert("첨부 가능 이미지 수는 최대 3장입니다.");
      return;
    }
    for await (const file of files || []) {
      const result = await new Promise((resolve) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (e) => {
          const src = e.target?.result;
          resolve(src);
        };
      });
      const id = Date.now();
      setImageList((prev) => [...prev, { id, result }]);
    }
  };

  return (
    <Container>
      <UploadNav children="업로드" btnDisabled={!imageList.length} />
      <UploadContainer>
        <ProfileImg src={profileImg} />
        <InputContainer>
          <Textarea
            rows={1}
            ref={textareaRef}
            onChange={handleResizeHeight}
            placeholder="게시글 입력하기..."
          />

          <ImageList>
            {imageList.map((img) => (
              <li className="" key={img.id}>
                <ImageContainer>
                  <Image
                    src={img.result}
                    alt=""
                    style={
                      imageList.length === 1
                        ? {
                            width: "304px",
                            height: "228px",
                          }
                        : {
                            width: "168px",
                            height: "126px",
                          }
                    }
                  />
                  <DeleteBtn
                    onClick={() =>
                      setImageList((prev) =>
                        prev.filter((a) => a.id !== img.id)
                      )
                    }
                  >
                    <IconDelete />
                  </DeleteBtn>
                </ImageContainer>
              </li>
            ))}
          </ImageList>
        </InputContainer>
      </UploadContainer>
      <FileUploadBtn onChangeImage={onChangeImage} />
    </Container>
  );
}
