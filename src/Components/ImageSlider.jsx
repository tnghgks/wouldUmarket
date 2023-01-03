import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import leftArrowIcon from "../assets/icon/left-arrow-icon.png";
import rightArrowIcon from "../assets/icon/right-arrow-icon.png";

function ImageSlider({ image, postId }) {
  const [imageCount, setImageCount] = useState(0);
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    setImageList(image.split(","));
  }, [image]);

  function handleLeftBtn() {
    if (imageCount - 1 < 0) {
      setImageCount(imageList.length - 1);
    } else {
      setImageCount((prev) => prev - 1);
    }
  }

  function handleRightBtn() {
    if (imageCount + 1 > imageList.length - 1) {
      setImageCount(0);
    } else {
      setImageCount((prev) => prev + 1);
    }
  }

  return (
    <ImageContainer>
      {!!imageList.length &&
        imageList.map((img) => (
          <PostLink to={`/post/${postId}`} key={crypto.randomUUID()}>
            <PostImg imageCount={imageCount} src={img} key={crypto.randomUUID()} />
          </PostLink>
        ))}
      {imageList.length > 1 && (
        <>
          <LeftBtn onClick={handleLeftBtn}>
            <img src={leftArrowIcon} alt="왼쪽 화살표 버튼" />
          </LeftBtn>
          <RightBtn onClick={handleRightBtn}>
            <img src={rightArrowIcon} alt="오른쪽 화살표 버튼" />
          </RightBtn>
        </>
      )}
    </ImageContainer>
  );
}
export default ImageSlider;

const ImageContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 304px;
`;
const PostLink = styled(Link)`
  width: 100%;
`;

const PostImg = styled.img`
  width: 100%;
  max-width: 304px;
  height: 208px;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 10px;
  transform: translateX(${(props) => props.imageCount * 304 * -1 + "px"});
`;
const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  border: none;
  background-color: transparent;
  cursor: pointer;
  img {
    width: 30px;
  }
  img:hover {
    transition: 0.5s;
    transform: scale(1.2);
  }
`;
const LeftBtn = styled(Button)`
  left: 0;
`;
const RightBtn = styled(Button)`
  right: 0;
`;
