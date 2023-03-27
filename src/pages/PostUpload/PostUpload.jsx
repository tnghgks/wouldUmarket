import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UploadNav from "../../components/navbar/UploadNav";
import FileUploadBtn from "../../components/button/FileUploadBtn";
import IconDelete from "../../components/icon/IconDelete";
import { useSelector } from "react-redux";
import { uploadPostImage, uploadPost } from "../../api/post";

// 상수로 빼서 관리
const baseURL = "https://mandarin.api.weniv.co.kr";

// base64 -> 이미지 File로 전환
const dataURLtoFile = (dataUrl, filename) => {
  const arr = dataUrl.split(",");
  const mimeMatch = arr[0].match(/:(.*?);/);
  const mime = mimeMatch != null ? mimeMatch[1] : "image/png";
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
};

// 게시물 업로드
function PostUpload() {
  const textareaRef = useRef();
  const [imageList, setImageList] = useState([]);
  const [textContent, setTextContent] = useState("");
  const navigate = useNavigate();
  const { userInfo, profile } = useSelector((state) => state);

  //자동 포커스
  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  //textarea height 자동 조절
  const handleResizeHeight = (e) => {
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    setTextContent(e.target.value);
  };

  //이미지 미리보기
  const onChangeImage = async (e) => {
    const { files } = e.target;
    if (files && files[0].size > 10 * 1024 * 1024) {
      alert("이미지 파일 사이즈는 10MB 이내로 등록 가능합니다.");
      return;
    }
    //파일 업로드 용량 제한(10MB)
    if (files.length > 3 || imageList.length > 2) {
      alert("첨부 가능 이미지 수는 최대 3장입니다.");
      return;
    }
    for await (const file of files || []) {
      const result = await new Promise((resolve) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (e) => {
          const src = e.target.result;
          resolve(src);
        };
      });

      const id = Date.now();
      setImageList((prev) => [...prev, { id, result, filename: file.name }]);
    }
    e.target.value = "";
  };

  // 서버로 이미지 보내기
  const getImageUrls = async () => {
    if (imageList.length === 0) throw new Error("등록된 미리보기 이미지가 없습니다");
    const formData = new FormData();
    for (const image of imageList) {
      formData.append("image", dataURLtoFile(image.result, image.filename));
    }
    const imgData = await uploadPostImage(formData);

    const isArray = Array.isArray(imgData);
    if (!isArray) throw new Error(imgData.message);

    const imgURLtoString = imgData.map((d) => `${baseURL}/${d.filename}`).join(",");

    return imgURLtoString;
  };

  // 포스트 업로드
  const onClickUpload = async () => {
    try {
      const postData = {
        post: {
          content: textContent,
          image: await getImageUrls(),
        },
      };
      await uploadPost({ postData });
      navigate(`/profile/${userInfo.accountname}`, { replace: true });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container>
      <h1 className="ir-hidden">게시물 작성 페이지</h1>
      <UploadNav
        children="업로드"
        btnDisabled={!imageList.length}
        bgColor={!imageList.length ? "light" : "main"}
        onClickUpload={onClickUpload}
      />
      <UploadContainer>
        <h2 className="ir-hidden">게시글 입력하기</h2>
        <BasicProfileImg src={profile.image} alt="프로필 이미지" />
        <InputContainer>
          <Textarea
            value={textContent}
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
                    onClick={() => setImageList((prev) => prev.filter((a) => a.id !== img.id))}
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

export default PostUpload;

const Container = styled.main`
  padding-top: 48px;
  min-height: 100vh;
  overflow-x: hidden;
`;

const UploadContainer = styled.section`
  display: flex;
  height: 100%;
  padding: 32px 16px 0 70px;
`;

const InputContainer = styled.div`
  width: 100%;
`;

const BasicProfileImg = styled.img`
  display: inline-block;
  width: 42px;
  height: 42px;
  position: fixed;
  top: 68px;
  left: 16px;
  margin-right: 12px;
  border-radius: 50%;
`;

const Textarea = styled.textarea`
  width: 100%;
  margin-bottom: 16px;
  padding: 0;
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
  overflow-x: scroll;
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
