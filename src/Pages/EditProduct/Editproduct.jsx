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
import { useForm } from "react-hook-form";
import { PRODUCT_ADDRESS_PATTEN } from "../../constant/regex";
import { PRICE_COMMA_SETTING } from "../../util/priceComma";

function EditProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [showImg, setShowImg] = useState("");
  const [disable, setDisable] = useState(true);
  // console.log(disable);
  const {
    profile: { accountname },
    product,
  } = useSelector((state) => state);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({
    // defaultValues: {
    //   imgFile: "",
    //   productName: "",
    //   productPrice: "",
    //   Address: "",
    // },
    mode: "onChange",
  });
  const productImg = watch("imgFile");
  const inputData = watch();
  console.log(isValid);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const { itemImage, itemName, price, link } = inputData;
    if (itemImage && itemName && price && link) {
      return setDisable(false);
    }
    setDisable(true);
  }, [inputData]);

  // 한개의 이미지 API
  async function productImgView(imgFile) {
    const formData = new FormData();
    formData.append("image", imgFile);
    const productSeverImg = await dispatch(MODIFY_PRODUCT_IMAGE({ formData }));
    return productSeverImg.payload;
  }

  // 이미지 미리보기
  useEffect(() => {
    if (productImg instanceof FileList) {
      setShowImg(URL.createObjectURL(productImg[0]));
      return () => URL.revokeObjectURL(productImg[0]);
    }
  }, [productImg]);

  // 저장 버튼 핸들러
  async function formSubmit({ productName, productPrice, Address, imgFile }) {
    const imgData = imgFile[0] ? await productImgView(imgFile[0]) : productImg;

    const productData = {
      product: {
        itemName: productName,
        price: Number(productPrice.replaceAll(",", "")),
        link: Address,
        itemImage: imgData,
      },
    };
    dispatch(MODIFY_PRODUCT({ productData, id }));
    navigate(`/profile/${accountname}`);
  }

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <BasicNav
        children="저장"
        bgColor={isValid ? "light" : "main"}
        btnDisabled={disable ? true : false}
      />
      <EditProfileContainer>
        <ProductContainer>
          <p>이미지 등록</p>
          <EditProductImgContainer>
            <ProductItemImg src={showImg ? showImg : productImg} alt="" />
            <label htmlFor="file">
              <UploadImgDiv></UploadImgDiv>
            </label>
            <UploadImgInput
              type="file"
              id="file"
              {...register("imgFile", {
                required: "상품 이미지를 넣어주세요.",
              })}
            />
          </EditProductImgContainer>
          {errors.imgFile && <Warning>{errors.imgFile.message}</Warning>}
        </ProductContainer>
        <InputContainer>
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
            label="판매링크"
            register={register("Address", {
              required: "판매링크를 입력해주세요.",
              pattern: {
                value: PRODUCT_ADDRESS_PATTEN,
                message: "잘못된 판매링크입니다.",
              },
            })}
          />
          {errors.Address && <Warning>{errors.Address.message}</Warning>}
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
