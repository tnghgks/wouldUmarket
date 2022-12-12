import styled from "styled-components";
import productImg from "../assets/product-img-example.png";

const Container = styled.section`
  width: 140px;
`;

const ProductImg = styled.img`
  width: 140px;
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

function Product() {
  return (
    <Container>
      <figure>
        <ProductImg src={productImg} alt="" />
        <ProductName>애월읍 노지 감귤</ProductName>
        <ProductPrice>35,000원</ProductPrice>
      </figure>
    </Container>
  );
}

export default Product;
