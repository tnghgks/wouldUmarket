import styled from "styled-components";
import productImg from "../assets/product-img-example.png";

const Container = styled.section`
  width: 140px;
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
  color: var(--accentColor);
`;

function Product({ productData }) {
  return (
    <Container>
      <figure>
        <ProductImg src={productData.itemImage || productImg} alt="" />
        <ProductName>{productData.itemName}</ProductName>
        <ProductPrice>{productData.price.toLocaleString()}원</ProductPrice>
      </figure>
    </Container>
  );
}

export default Product;
