import styled from "styled-components";
import BasicNav from "../../../../Components/Navbar/UploadNav";
import ProductImg from "./ProductImg/ProductImg";
import EditProductInput from "./EditProductInput/EditProductInput";
import { useDispatch, useSelector } from "react-redux";
import {
  MODIFY_PRODUCT,
  DETAIL_PRODUCT,
  MODIFY_PRODUCT_IMAGE,
} from "../../../../store/Product";
import { useEffect } from "react";
import { getCookie } from "../../../../cookie";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const token = getCookie("accessToken");
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    profile: { accountname },
    product: { itemImage },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(DETAIL_PRODUCT({ token, id }));
  }, []);

  async function productImg(imgFile) {
    const formData = new FormData();
    formData.append("image", imgFile);

    const productseverimg = await dispatch(MODIFY_PRODUCT_IMAGE({ formData }));
    return productseverimg.payload;
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    const {
      productName: { value: nameValue },
      productPrice: { value: priceValue },
      Address: { value: addressValue },
      imgFile,
    } = event.target;

    const submitValidation = nameValue && priceValue && addressValue;
    const imgData = imgFile.files[0]
      ? await productImg(imgFile.files[0])
      : itemImage;

    if (!submitValidation) {
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

    dispatch(MODIFY_PRODUCT({ token, productData, id }));
    navigate(`/profile/${accountname}`);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <BasicNav children="저장" bgColor />
      <EditProfileContainer>
        <ProductImg />
        <EditProductInput />
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
