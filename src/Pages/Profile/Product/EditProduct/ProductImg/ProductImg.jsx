import styled from "styled-components";
import ImgButton from "../../../../../assets/upload-file.png";
import { useState } from "react";
import { useSelector } from "react-redux";

function ProductImg() {
  const [imgData, setImgData] = useState("");
  const {
    product: { itemImage },
  } = useSelector((state) => state);

  const productImg = imgData ? imgData : itemImage;

  function handleProductImg(imgFile) {
    const reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.onloadend = () => {
      setImgData(reader.result);
    };
  }

  return (
    <ProductContainer>
      <p>이미지 등록</p>
      <EditProductImgContainer>
        <ProductItemImg src={productImg} alt="" />
        <label htmlFor="file">
          <UploadImgDiv></UploadImgDiv>
        </label>
        <UploadImgInput
          type="file"
          name="imgFile"
          id="file"
          onChange={(e) => {
            handleProductImg(e.currentTarget.files[0]);
          }}
        />
      </EditProductImgContainer>
    </ProductContainer>
  );
}

export default ProductImg;

const ProductContainer = styled.section`
  width: 322px;
  margin-top: 30px;
  color: #767676;
  font-weight: 400;
  font-size: 12px;
`;

const EditProductImgContainer = styled.section`
  margin-top: 18px;
  height: 204px;
  background-color: #f2f2f2;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  text-align: center;
`;

const ProductItemImg = styled.img`
  width: 332px;
  height: 204px;
  object-fit: cover;
`;
const UploadImgDiv = styled.div`
  background-image: url(${ImgButton});
  background-size: contain;
  width: 36px;
  height: 36px;
  position: absolute;
  bottom: 12px;
  right: 12px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

const UploadImgInput = styled.input`
  display: none;
`;
