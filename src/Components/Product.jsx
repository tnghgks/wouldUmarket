import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { deleteProduct } from "../api/product";
import productImg from "../assets/product-img-example.png";
import { CLOSE_MODAL, SET_MAIN_MODAL, SET_SUB_MODAL } from "../store/Modal";
import { SET_PRODUCT_LIST } from "../store/ProductList";

function Product({ productData, setModalInfo, setSubModalData }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accountname } = useParams();
  const {
    userInfo: { userId },
  } = useSelector((state) => state);

  async function handleDeleteProduct() {
    const isSuccess = await deleteProduct(productData.id);

    if (isSuccess) {
      dispatch(SET_PRODUCT_LIST(accountname));
      dispatch(CLOSE_MODAL());
    }
  }

  function handleModalOpen() {
    if (userId === productData.author._id) {
      setModalInfo([
        {
          text: "삭제",
          handleFunc: () => {
            setSubModalData({
              text: "삭제하시겠습니까?",
              rightText: "삭제",
              handleFunc: handleDeleteProduct,
            });
            dispatch(SET_SUB_MODAL());
          },
        },
        {
          text: "수정",
          handleFunc: () => {
            dispatch(CLOSE_MODAL());
            navigate(`/profile/editProduct/${productData.id}`);
          },
        },
        {
          text: "웹사이트에서 상품 보기",
          handleFunc: () => {
            dispatch(CLOSE_MODAL());
            window.open(productData.link, "_blank");
          },
        },
      ]);
    } else {
      setModalInfo([
        {
          text: "웹사이트에서 상품 보기",
          handleFunc: () => {
            dispatch(CLOSE_MODAL());
            window.open(productData.link, "_blank");
          },
        },
      ]);
    }
    dispatch(SET_MAIN_MODAL());
  }

  return (
    <Container onClick={handleModalOpen} tabIndex={0}>
      <figure>
        <ProductImg src={productData.itemImage || productImg} alt="" />
        <ProductName>{productData.itemName}</ProductName>
        <ProductPrice>시간당 {productData.price.toLocaleString()}원</ProductPrice>
      </figure>
    </Container>
  );
}

export default Product;

const Container = styled.li`
  width: 140px;
  cursor: pointer;
`;

const ProductImg = styled.img`
  width: 140px;
  height: 90px;
  object-fit: cover;
  border-radius: 10%;
`;

const ProductName = styled.figcaption`
  font-size: 1.4rem;
  margin: 10px 5px;
`;

const ProductPrice = styled.figcaption`
  font-size: 1.2rem;
  margin: 0 5px;
  color: var(--mainColor);
`;
