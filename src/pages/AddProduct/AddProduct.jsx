import styled from "styled-components";
import ImgButton from "../../assets/upload-file.png";
import CommonInput from "../../components/input/CommonInput";
import UploadNav from "../../components/navbar/UploadNav";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PRODUCT } from "../../store/Product";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadImage from "../../assets/UploadImage.png";
import { uploadImage } from "../../api/util";
import { useForm } from "react-hook-form";
import { PRODUCT_ADDRESS_PATTEN } from "../../constant/regex";
import { PRICE_COMMA_SETTING } from "../../lib/util/priceComma";

function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile } = useSelector((state) => state);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      imgFile: UploadImage,
    },
    mode: "onChange",
  });

  const inputData = watch();
  const productImage = watch("imgFile");

  const [productImg, setProductImg] = useState(UploadImage);

  useEffect(() => {
    if (productImage instanceof FileList) {
      setProductImg(URL.createObjectURL(productImage[0]));
    }
    return () => URL.revokeObjectURL(productImage[0]);
  }, [productImage]);

  async function formatProductImg(formData) {
    const { isSuccess, imgData } = await uploadImage(formData);

    if (isSuccess) {
      return `https://mandarin.api.weniv.co.kr/${imgData.filename}`;
    }
  }

  async function formSubmit({ productName, itemPrice, saleAddress, imgFile }) {
    const formData = new FormData();
    formData.append("image", imgFile[0]);
    const productData = {
      product: {
        itemName: productName,
        price: Number(itemPrice.replaceAll(",", "")),
        link: saleAddress,
        itemImage: await formatProductImg(formData),
      },
    };
    dispatch(ADD_PRODUCT({ productData }));
    navigate(`/profile/${profile.accountname}`);
  }

  return (
    <main>
      <h1 className="ir-hidden">상품 등록 페이지</h1>
      <UploadNav children="저장" btnDisabled={!isValid} bgColor={!isValid ? "light" : "main"} />
      <EditProfileContainer onSubmit={handleSubmit(formSubmit)}>
        <ProductContainer>
          <h2>이미지 등록</h2>
          <EditProductImgContainer>
            <ProductItemImg src={productImg} alt="상품 이미지" />
            <label htmlFor="file">
              <UploadImgDiv></UploadImgDiv>
            </label>
            <UploadImgInput type="file" id="file" {...register("imgFile")} />
          </EditProductImgContainer>
          {errors.imgFile && <Warning>{errors.imgFile.message}</Warning>}
        </ProductContainer>
        <InputContainer>
          <h2 className="ir-hidden">상품 상세 입력란</h2>
          <CommonInput
            id="productName"
            type="text"
            placeholder={"2~15자 이내여야 합니다."}
            label="상품명"
            register={register("productName", {
              required: "상품명을 입력해주세요.",
              minLength: {
                value: 2,
                message: "2자 이상이어야 합니다.",
              },
              maxLength: {
                value: 15,
                message: "15자 이내여야 합니다.",
              },
            })}
          />
          {errors.productName && <Warning>{errors.productName.message}</Warning>}
          <CommonInput
            id="itemPrice"
            type="text"
            placeholder={"숫자만 입력 가능 합니다."}
            label="가격"
            value={PRICE_COMMA_SETTING(inputData.itemPrice)}
            register={register("itemPrice", {
              required: "가격을 입력해주세요.",
            })}
          />
          {errors.itemPrice && <Warning>{errors.itemPrice.message}</Warning>}
          <CommonInput
            id="saleAddress"
            type="text"
            placeholder={"URl을 입력해 주세요."}
            label="판매링크"
            register={register("saleAddress", {
              required: "판매링크를 입력해주세요.",
              pattern: {
                value: PRODUCT_ADDRESS_PATTEN,
                message: "잘못된 판매링크 입니다.",
              },
            })}
          />
          {errors.saleAddress && <Warning>{errors.saleAddress.message}</Warning>}
        </InputContainer>
      </EditProfileContainer>
    </main>
  );
}

export default AddProduct;

// 페이지 전체 컨테이너 컴퍼넌트
const EditProfileContainer = styled.form`
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
const EditProductImgContainer = styled.div`
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
