import styled from "styled-components";
import UploadNav from "../../components/navbar/UploadNav";
import ImgButton from "../../assets/upload-file.png";
import CommonInput from "../../components/input/CommonInput";
import { useDispatch, useSelector } from "react-redux";
import {
  MODIFY_PRODUCT,
  DETAIL_PRODUCT,
  MODIFY_PRODUCT_IMAGE,
} from "../../store/Product";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { PRODUCT_ADDRESS_PATTEN } from "../../constant/regex";
import { PRICE_COMMA_SETTING } from "../../lib/util/priceComma";

function EditProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [showImg, setShowImg] = useState("");
  const {
    profile: {
      profile: { accountname },
    },
    product,
  } = useSelector((state) => state);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });
  const productImg = watch("imgFile");
  const inputData = watch();

  useEffect(() => {
    if (product) {
      reset({
        imgFile: product.itemImage,
        productName: product.itemName,
        productPrice: product.price,
        Address: product.link,
      });
    }
  }, [product, reset]);

  useEffect(() => {
    dispatch(DETAIL_PRODUCT(id));
  }, [dispatch, id]);

  // 한개의 이미지 API
  function productImgView(imgFile) {
    const formData = new FormData();
    formData.append("image", imgFile);
    const productSeverImg = dispatch(MODIFY_PRODUCT_IMAGE({ formData }));
    return productSeverImg.payload;
  }

  // 이미지 미리보기
  useEffect(() => {
    if (productImg && productImg instanceof FileList) {
      setShowImg(URL.createObjectURL(productImg[0]));
      return () => URL.revokeObjectURL(productImg[0]);
    }
  }, [productImg]);

  // 저장 버튼 핸들러
  function formSubmit({ productName, productPrice, Address, imgFile }) {
    const imgData = imgFile[0] ? productImgView(imgFile[0]) : productImg;
    const productData = {
      product: {
        itemName: productName,
        price:
          typeof productPrice === "number"
            ? productPrice
            : Number(productPrice.replaceAll(",", "")),
        link: Address,
        itemImage: imgData,
      },
    };
    dispatch(MODIFY_PRODUCT({ productData, id }));
    navigate(`/profile/${accountname}`);
  }

  return (
    <main>
      <h1 className="ir-hidden">상품 상세 수정 페이지</h1>
      <UploadNav
        children="저장"
        bgColor={!isValid ? "light" : "main"}
        btnDisabled={!isValid}
        form="editProductForm"
      />
      <EditProfileContainer
        onSubmit={handleSubmit(formSubmit)}
        id="editProductForm"
      >
        <ProductContainer>
          <h2 className="ir-hidden">이미지 등록</h2>
          <EditProductImgContainer>
            <ProductItemImg
              src={showImg ? showImg : productImg}
              alt="상품 이미지"
            />
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
            type="text"
            placeholder={"2~15자 이내여야 합니다."}
            label="상품명"
            register={register("productName", {
              required: "상품명을 입력해주세요.",
              minLength: {
                value: 2,
                message: "2자 이상 입력해주세요.",
              },
              maxLength: {
                value: 15,
                message: "15자 이내로 입력해주세요.",
              },
            })}
          />
          {errors.productName && (
            <Warning>{errors.productName.message}</Warning>
          )}
          <CommonInput
            type="text"
            placeholder={"숫자만 입력 가능 합니다."}
            label="가격"
            value={PRICE_COMMA_SETTING(inputData.productPrice)}
            register={register("productPrice", {
              required: "가격을 입력해주세요.",
            })}
          />
          {errors.productPrice && (
            <Warning>{errors.productPrice.message}</Warning>
          )}
          <CommonInput
            type="text"
            placeholder={"URl을 입력해 주세요."}
            label="상품링크"
            register={register("Address", {
              required: "상품링크를 입력해주세요.",
              pattern: {
                value: PRODUCT_ADDRESS_PATTEN,
                message: "잘못된 상품링크입니다.",
              },
            })}
          />
          {errors.Address && <Warning>{errors.Address.message}</Warning>}
        </InputContainer>
      </EditProfileContainer>
    </main>
  );
}

export default EditProduct;

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
