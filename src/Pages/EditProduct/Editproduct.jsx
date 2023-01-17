import styled from "styled-components";
import BasicNav from "../../Components/Navbar/UploadNav";
import ImgButton from "../../assets/upload-file.png";
import CommonInput from "../../Components/Input/CommonInput";
import { useDispatch, useSelector } from "react-redux";
import {
  MODIFY_PRODUCT,
  DETAIL_PRODUCT,
  MODIFY_PRODUCT_IMAGE,
} from "../../store/Product";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// 판매링크 유효성 정규표현식
const addressRegex =
  // eslint-disable-next-line no-useless-escape
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;

function EditProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    profile: { accountname },
    product: { itemImage, itemName, price, link },
  } = useSelector((state) => state);
  const [imgData, setImgData] = useState("");
  const [errorMassage, setErrorMassage] = useState("");
  const [inputData, setInputData] = useState({
    name: "",
    price: "",
    address: "",
  });

  const validation =
    errorMassage.name || errorMassage.price || errorMassage.address;
  const disabled = inputData.name && inputData.price && inputData.address;
  const productImg = imgData ? imgData : itemImage;

  useEffect(() => {
    dispatch(DETAIL_PRODUCT(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setInputData({
      name: itemName,
      price: priceInputValueComma(price),
      address: link,
    });
  }, [itemName, price, link]);

  // price 콤마 찍기
  function priceInputValueComma(price) {
    const comMa = (priceValue) => {
      priceValue = String(priceValue);
      return priceValue.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    };
    const unComMa = (priceValue) => {
      priceValue = String(priceValue);
      return priceValue.replace(/[^\d]+/g, "");
    };
    return comMa(unComMa(price));
  }

  // 한개의 이미지 API 로직
  async function productImgView(imgFile) {
    const formData = new FormData();
    formData.append("image", imgFile);
    const productSeverImg = await dispatch(MODIFY_PRODUCT_IMAGE({ formData }));
    console.log(productSeverImg);
    return productSeverImg.payload;
  }

  // 이미지 미리보기
  function handleProductImg(imgFile) {
    const reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.onloadend = () => {
      setImgData(reader.result);
    };
  }

  // name 유효성 검사
  function handleName(e) {
    const nameValue = e.target.value;
    setInputData((prev) => ({ ...prev, name: nameValue }));

    if (!nameValue) {
      setErrorMassage((prev) => ({ ...prev, name: "상품명을 입력해주세요." }));
    } else if (nameValue.length < 2 || nameValue.length > 15) {
      setErrorMassage((prev) => ({
        ...prev,
        name: "2~15자 이내로 작성해 주세요",
      }));
    } else {
      setErrorMassage((prev) => ({ ...prev, name: "" }));
    }
  }

  // price 유효성 검사
  function handlePrice(e) {
    const priceValue = e.target.value;
    setInputData((prev) => ({
      ...prev,
      price: priceInputValueComma(priceValue),
    }));

    if (!priceValue) {
      setErrorMassage((prev) => ({ ...prev, price: "가격을 입력해주세요." }));
    } else {
      setErrorMassage((prev) => ({ ...prev, price: "" }));
    }
  }

  // address 유효성 검사
  function handleAddress(e) {
    const addressValue = e.target.value;
    setInputData((prev) => ({ ...prev, address: addressValue }));

    if (!addressValue) {
      setErrorMassage((prev) => ({
        ...prev,
        address: "판매링크를 입력해주세요.",
      }));
    } else if (!addressRegex.test(addressValue)) {
      setErrorMassage((prev) => ({
        ...prev,
        address: "잘못된 판매링크 입니다.",
      }));
    } else {
      setErrorMassage((prev) => ({ ...prev, address: "" }));
    }
  }

  // 저장 버튼 핸들러
  async function handleFormSubmit(event) {
    event.preventDefault();

    const {
      productName: { value: nameValue },
      productPrice: { value: priceValue },
      Address: { value: addressValue },
      imgFile,
    } = event.target;

    const imgData = imgFile.files[0]
      ? await productImgView(imgFile.files[0])
      : itemImage;

    if (!!validation) {
      if (!!errorMassage.name) {
        setErrorMassage((prev) => ({ ...prev, name: "잘못된 상품명입니다." }));
      }
      if (!!errorMassage.address) {
        setErrorMassage((prev) => ({
          ...prev,
          address: "잘못된 판매링크입니다.",
        }));
      }
      return false;
    }

    const productData = {
      product: {
        itemName: nameValue,
        price: Number(priceValue.replaceAll(",", "")),
        link: addressValue,
        itemImage: imgData,
      },
    };
    dispatch(MODIFY_PRODUCT({ productData, id }));
    navigate(`/profile/${accountname}`);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <BasicNav
        children="저장"
        bgColor={!disabled ? "light" : "main"}
        btnDisabled={!disabled ? true : false}
      />
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
        </ProductContainer>
        <InputContainer>
          <CommonInput
            name="productName"
            type="text"
            placeholder={"2~15자 이내여야 합니다."}
            label="상품명"
            value={inputData.name}
            onChange={handleName}
          />
          <Warning>{errorMassage.name}</Warning>
          <CommonInput
            name="productPrice"
            type="text"
            placeholder={"숫자만 입력 가능 합니다."}
            label="가격"
            value={inputData.price}
            onChange={handlePrice}
          />
          <Warning>{errorMassage.price}</Warning>
          <CommonInput
            name="Address"
            type="text"
            placeholder={"URl을 입력해 주세요."}
            label="판매링크"
            value={inputData.address}
            onChange={handleAddress}
          />
          <Warning>{errorMassage.address}</Warning>
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

const Warning = styled.p`
  font-size: 1.2rem;
  color: #eb5757;
`;
