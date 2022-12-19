import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Product from "../../../../Components/Product";
import { getCookie } from "../../../../cookie";

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

function UserProducts() {
  const [product, setProduct] = useState([]);
  const { accountname } = useParams();
  const token = getCookie("accessToken");

  async function getUserData() {
    try {
      const res = await fetch(`https://mandarin.api.weniv.co.kr/product/${accountname}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      const { product } = await res.json();

      setProduct(product);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    !!product.length && (
      <Container>
        <ProductContainer>
          <Title>판매 중인 상품</Title>
          <ProductsList>{!!product.length && product.map((productData, index) => <Product key={index} productData={productData} />)}</ProductsList>
        </ProductContainer>
      </Container>
    )
  );
}
export default UserProducts;
