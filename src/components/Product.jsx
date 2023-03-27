import { useDispatch } from "react-redux";
import styled from "styled-components";
import productImg from "../assets/product-img-example.png";
import { OPEN_MAIN_MODAL } from "../store/Modal";

function Product({ productData }) {
  const dispatch = useDispatch();

  function handleModalOpen() {
    dispatch(OPEN_MAIN_MODAL({ modalType: "PRODUCT_MODAL", target: productData }));
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
