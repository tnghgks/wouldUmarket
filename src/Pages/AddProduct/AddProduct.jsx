import styled from "styled-components";
import ImgButton from "../../assets/upload-file.png";
import CommonInput from "../../Components/Input/CommonInput";
import BasicNav from "../../Components/Navbar/UploadNav";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PRODUCT } from "../../store/Product";
import { useState } from "react";
import { getCookie } from "../../cookie";
import { useNavigate } from "react-router-dom";
import UploadImage from "../../assets/UploadImage.png";

function AddProduct() {
  const token = getCookie("accessToken");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile } = useSelector((state) => state);

  const [productName, setProductName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [address, setAddress] = useState("");
  const [productImg, setProductImg] = useState(UploadImage);

  const [productNameError, setProductNameError] = useState(true);
  const [itemPriceError, setItemPriceError] = useState(true);
  const [addressError, setAddressError] = useState(true);
  const [productImgError, setProductImgError] = useState("");

  const Enabled =
    !productNameError &&
    !itemPriceError &&
    !addressError &&
    !!productImg &&
    productImg !== UploadImage;

  function nameValidation(e) {
    const nameValue = e.target.value;
    setProductName(nameValue);

    if (!nameValue) {
      setProductNameError("상품명을 입력해주세요.");
    } else if (nameValue.length < 2 || nameValue.length > 15) {
      setProductNameError("2~15자 이내로 작성해 주세요");
    } else {
      setProductNameError("");
    }
  }

  function priceValidation(e) {
    const priceValue = e.target.value;

    setItemPrice(() => {
      const comma = (priceValue) => {
        priceValue = String(priceValue);
        return priceValue.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
      };
      const unComma = (priceValue) => {
        priceValue = String(priceValue);
        return priceValue.replace(/[^\d]+/g, "");
      };
      return comma(unComma(priceValue));
    });

    if (!priceValue) {
      setItemPriceError("가격을 입력해주세요.");
    } else {
      setItemPriceError("");
    }
  }

  function addressValidation(e) {
    const addressValue = e.target.value;
    setAddress(addressValue);

    // eslint-disable-next-line no-useless-escape
    const addressRegex =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;

    if (!addressValue) {
      setAddressError("판매링크를 입력해주세요.");
    } else if (!addressRegex.test(addressValue)) {
      setAddressError("잘못된 판매링크 입니다.");
    } else {
      setAddressError("");
    }
  }

  function handleProductImg(imgFile) {
    setProductImgError("");
    const reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.onloadend = () => {
      setProductImg(reader.result);
    };
  }

  async function formatProductImg(formData) {
    try {
      const res = await fetch(
        `https://mandarin.api.weniv.co.kr/image/uploadfile`,
        {
          method: "POST",
          body: formData,
        }
      );
      const imgData = await res.json();
      if (!imgData) return;
      return `https://mandarin.api.weniv.co.kr/${imgData.filename}`;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    if (!Enabled) {
      if (!!productNameError) {
        setProductNameError("잘못된 상품명입니다.");
      }
      if (!!itemPriceError) {
        setItemPriceError("잘못된 가격입니다.");
      }
      if (!!addressError) {
        setAddressError("잘못된 팬매링크입니다.");
      }
      if (!productImg) {
        setProductImgError("잘못된 이미지입니다.");
      }
      return false;
    }
    const { imgFile } = event.target;

    const formData = new FormData();
    formData.append("image", imgFile.files[0]);
    const productData = {
      product: {
        itemName: productName,
        price: Number(itemPrice.replaceAll(",", "")),
        link: address,
        itemImage: await formatProductImg(formData),
      },
    };

    dispatch(ADD_PRODUCT({ productData, token }));
    navigate(`/profile/${profile.accountname}`);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <BasicNav children="저장" bgColor={!Enabled ? "light" : "main"} />
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
              name="imgFile"
              id="file"
              onChange={(e) => {
                handleProductImg(e.currentTarget.files[0]);
              }}
            />
          </EditProductImgContainer>
          <Warning>{productImgError}</Warning>
        </ProductContainer>
        <InputContainer>
          <CommonInput
            name="productName"
            type="text"
            placeholder={"2~15자 이내여야 합니다."}
            label="상품명"
            onChange={nameValidation}
          />
          <Warning>{productNameError}</Warning>
          <CommonInput
            name="itemPrice"
            type="text"
            placeholder={"숫자만 입력 가능 합니다."}
            label="가격"
            value={itemPrice}
            onChange={priceValidation}
          />
          <Warning>{itemPriceError}</Warning>
          <CommonInput
            name="saleAddress"
            type="text"
            placeholder={"URl을 입력해 주세요."}
            label="판매링크"
            onChange={addressValidation}
          />
          <Warning>{addressError}</Warning>
        </InputContainer>
      </EditProfileContainer>
    </form>
  );
}

export default AddProduct;

// 페이지 전체 컨테이너 컴퍼넌트
const EditProfileContainer = styled.main`
  width: 390px;
  height: 820px;
  padding: 78px 34px 0 34px;
  margin: 0 auto;
`;

// 상품 사진 변경 컴퍼넌트

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

// input 컴퍼넌트
const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 30px;
  & > div > input {
    &:focus {
      border-bottom-color: #f26e22;
      transition: border-bottom-color 200ms;
    }
  }
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

const Warning = styled.p`
  font-size: 1.2rem;
  color: #eb5757;
`;
