import { useSelector } from "react-redux";
import styled from "styled-components";
import Product from "../../../Components/Product";

function UserProducts({ setModalInfo, setSubModalData }) {
  const {
    productList: { products },
  } = useSelector((state) => state);

  return (
    !!products.length && (
      <Container>
        <ProductContainer>
          <Title>대여 중인 상품</Title>
          <ProductsList>
            {!!products.length &&
              products.map((productData, index) => <Product key={index} productData={productData} setModalInfo={setModalInfo} setSubModalData={setSubModalData} />)}
          </ProductsList>
        </ProductContainer>
      </Container>
    )
  );
}
export default UserProducts;

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
  overflow: auto hidden;
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
