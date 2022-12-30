import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ImageSlider({ image, postId }) {
  const [imageCount, setImageCount] = useState(0);
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    setImageList(image.split(","));
  }, [image]);

  function handleRightBtn() {
    if (imageCount + 1 > imageList.length - 1) {
      setImageCount(0);
    } else {
      setImageCount((prev) => prev + 1);
    }
  }

  function handleLeftBtn() {
    if (imageCount - 1 < 0) {
      setImageCount(imageList.length - 1);
    } else {
      setImageCount((prev) => prev - 1);
    }
  }
  return (
    <ImageContainer>
      {!!image && (
        <PostLink to={`/post/${postId}`} key={crypto.randomUUID()}>
          <LeftBtn onClick={handleLeftBtn}>{"<"}</LeftBtn>
          <PostImg src={imageList[imageCount]} key={crypto.randomUUID()} />
          <RightBtn onClick={handleRightBtn}>{">"}</RightBtn>
        </PostLink>
      )}
    </ImageContainer>
  );
}
export default ImageSlider;

const ImageContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  overflow: hidden;
  width: 304px;
`;

const PostImg = styled.img`
  width: 304px;
  height: 208px;
  object-fit: cover;
  border-radius: 10px;
`;
const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
const LeftBtn = styled(Button)`
  left: 0;
`;
const RightBtn = styled(Button)`
  right: 0;
`;
const PostLink = styled(Link)`
  position: relative;
`;
