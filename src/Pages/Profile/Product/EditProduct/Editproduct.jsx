import styled from "styled-components";
import ImgButton from "../../../../assets/upload-file.png";
import CommonInput from "../../../../Components/CommonInput";
import BasicNav from "../../../../Components/Navbar/UploadNav";
import { useDispatch, useSelector } from "react-redux";
import { MODIFY_PRODUCT, DETAIL_PRODUCT } from "../../../../store/Product";
import { useState, useEffect } from "react";
import { getCookie } from "../../../../cookie";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const token = getCookie("accessToken");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    profile: { accountname },
    product: { price, itemImage, itemName, link },
  } = useSelector((state) => state);
  const { id } = useParams();

  const [itemPrice, setItemPrice] = useState("");
  const [productImg, setProductImg] = useState("");
  // const [priceData, setPriceData] = useState("");

  const [productNameError, setProductNameError] = useState(true);
  const [itemPriceError, setItemPriceError] = useState(true);
  const [addressError, setAddressError] = useState(true);
  const [productImgError, setProductImgError] = useState("");

  const Enabled =
    !productNameError && !itemPriceError && !addressError && !!productImg;

  const priceData = itemPrice ? itemPrice : price;

  useEffect(() => {
    dispatch(DETAIL_PRODUCT({ token, id }));
  }, []);

  function nameValidation(e) {
    const nameValue = e.target.value;

    if (!nameValue) {
      setProductNameError("상품명을 입력해주세요.");
    } else if (nameValue.length < 2 || nameValue.length > 15) {
      setProductNameError("2~15자 이내로 작성해 주세요");
    } else {
      setProductNameError("");
    }
  }
  useEffect(() => {
    setItemPrice(() => {
      const comma = (priceData) => {
        priceData = String(priceData);
        return priceData.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
      };
      const unComma = (priceData) => {
        priceData = String(priceData);
        return priceData.replace(/[^\d]+/g, "");
      };
      return comma(unComma(priceData));
    });
  }, ["", priceValidation]);

  function priceValidation(e) {
    const priceValue = e.target.value;
    setItemPrice(priceValue);

    // price 유효성 검사
    if (!priceValue) {
      setItemPriceError("가격을 입력해주세요.");
    } else {
      setItemPriceError("");
    }
  }

  function addressValidation(e) {
    const addressValue = e.target.value;

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

  async function UserProfileImg(formData) {
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

    // if (!Enabled) {
    //   if (!!productNameError) {
    //     return itemName ? true : setProductNameError("잘못된 상품명입니다.");
    //   }
    //   if (!!itemPriceError) {
    //     return price ? true : setItemPriceError("잘못된 가격입니다.");
    //   }
    //   if (!!addressError) {
    //     return link ? true : setAddressError("잘못된 팬매링크입니다.");
    //   }
    //   if (!productImg) {
    //     return itemImage ? true : setProductImgError("잘못된 이미지입니다.");
    //   }
    //   return itemImage ? true : false;
    // }

    const { productName, Address, imgFile } = event.target;

    const imgData = imgFile ? imgFile.files[0] : itemImage;

    const formData = new FormData();
    formData.append("image", imgData);

    const productData = {
      product: {
        itemName: productName.value,
        price: Number(itemPrice.replaceAll(",", "")),
        link: Address.value,
        itemImage: await UserProfileImg(formData),
      },
    };

    dispatch(MODIFY_PRODUCT({ productData, token, id }));
    navigate(`/profile/${accountname}`);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <BasicNav
        children="저장"
        bgColor={!Enabled ? "light" : "accent"}
        btnDisabled={Enabled}
      />
      <EditProfileContainer>
        <ProductContainer>
          <p>이미지 등록</p>
          <EditProductImgContainer>
            <ProductItemImg src={productImg || itemImage} alt="" />
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
            defaultValue={itemName}
            onChange={nameValidation}
          />
          <Warning>{productNameError}</Warning>
          <CommonInput
            name="productPrice"
            type="text"
            placeholder={"숫자만 입력 가능 합니다."}
            label="가격"
            // value={itemPrice}
            defaultValue={priceData}
            onChange={priceValidation}
          />
          <Warning>{itemPriceError}</Warning>
          <CommonInput
            name="Address"
            type="text"
            placeholder={"URl을 입력해 주세요."}
            label="판매링크"
            defaultValue={link}
            onChange={addressValidation}
          />
          <Warning>{addressError}</Warning>
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
// 경고창 컴퍼넌트
const Warning = styled.p`
  font-size: 1.2rem;
  color: #eb5757;
`;
