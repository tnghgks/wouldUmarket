import styled from "styled-components";
import ImgButton from "../../../assets/upload-file.png";
import CommonInput from "../../../Components/CommonInput";
import BasicNav from "../../../Components/Navbar/UploadNav";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_PRODUCT } from "../../../store/Product";
import { useState } from "react";
import { getCookie } from "../../../cookie";

function EditProduct() {
  const token = getCookie("accessToken");
  const dispatch = useDispatch();

  const [productName, setProductName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [saleAddress, setSaleAddress] = useState("");
  const [productImg, setProductImg] = useState("");

  function handleProductImg(imgFile) {
    const reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.onloadend = () => {
      setProductImg(reader.result);
    };
  }

  function handleformsubmit(event) {
    event.preventDefault();
    const { imgfile } = event.target;

    const productData = {
      product: {
        itemName: productName,
        price: itemPrice,
        link: saleAddress,
        itemImage: imgfile.files[0],
      },
    };

    dispatch(ADD_PRODUCT(productData, token));
  }

  return (
    <form onSubmit={handleformsubmit}>
      <BasicNav children="저장" />
      <EditProfileContainer>
        <ProductContainer>
          <p>이미지 등록</p>
          <EditProductImgContainer>
            <ProductItemImg src={productImg} alt="" />
            <label htmlFor="file">
              <UploadImgDiv></UploadImgDiv>
            </label>
            <UploadImgInput
              type="file"
              name="imgfile"
              id="file"
              onChange={(e) => handleProductImg(e.currentTarget.files[0])}
            />
          </EditProductImgContainer>
        </ProductContainer>
        <InputContainer>
          <CommonInput
            name="productName"
            type="text"
            placeholder={"2~15자 이내여야 합니다."}
            label="상품명"
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
          <CommonInput
            name="itemPrice"
            type="text"
            placeholder={"숫자만 입력 가능 합니다."}
            label="가격"
            onChange={(e) => {
              setItemPrice(e.target.value);
            }}
          />
          <CommonInput
            name="saleAddress"
            type="text"
            placeholder={"URl을 입력해 주세요."}
            label="판매링크"
            onChange={(e) => {
              setSaleAddress(e.target.value);
            }}
          />
        </InputContainer>
      </EditProfileContainer>
    </form>
  );
}

export default EditProduct;

// 페이지 전체 컨테이너 컴퍼넌트
const EditProfileContainer = styled.main`
  width: 390px;
  height: 820px;
  padding: 78px 34px 0 34px;
  margin: 0 auto;
`;

// 상품 사진 변경 컴퍼넌트

const ProductContainer = styled.section`
  /* background-image: ; */
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

// input 컴퍼넌트
const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 30px;
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
