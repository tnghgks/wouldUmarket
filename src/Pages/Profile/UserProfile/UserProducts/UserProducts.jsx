import styled from "styled-components";
import Product from "../../../../Components/Product";

const Container = styled.article`
  width: 100%;
  padding: 20px 0px 20px 16px;
  background-color: #ffffff;
  margin-bottom: 6px;
  border: 0.5px solid #dbdbdb;
  display: flex;
  justify-content: center;
`;
const ProductContainer = styled.div`
  width: 390px;
  overflow: scroll hidden;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;
`;

const ProductsList = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 16px;
`;

function UserProducts() {
  return (
    <Container>
      <ProductContainer>
        <Title>판매 중인 상품</Title>
        <ProductsList>
          <Product />
          <Product />
          <Product />
        </ProductsList>
      </ProductContainer>
    </Container>
  );
}
export default UserProducts;
