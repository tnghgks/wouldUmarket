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
      <PostList>
        <PostLink to={`/post/${postId}`}>
          {!!imageList.length &&
            imageList.map((img, index) => (
              <PostImg
                imageCount={imageCount}
                src={img}
                key={`${img}/${index}`}
                alt="게시물 이미지"
              />
            ))}
        </PostLink>
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
      </PostList>
    </ImageContainer>
  );
}
export default ImageSlider;

const ImageContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  position: relative;

  width: 100%;
  max-width: 304px;
`;
const PostLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
`;

const PostList = styled.li`
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
  border: none;
  background-color: transparent;
  cursor: pointer;
  img {
    width: 80%;
    opacity: 75%;
  }
  img:hover {
    transition: 0.5s;
    transform: scale(1.2);
  }
`;
const LeftBtn = styled(Button)`
  left: 2px;
`;
const RightBtn = styled(Button)`
  right: 2px;
`;
