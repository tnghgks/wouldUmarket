import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Product from "../../../../Components/Product";
import { getCookie } from "../../../../cookie";
import { SET_PRODUCT_LIST } from "../../../../store/ProductList";

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

function UserProducts({ setModalInfo, setSubModalData }) {
  const dispatch = useDispatch();
  const {
    productList: { products },
  } = useSelector((state) => state);
  const { accountname } = useParams();
  const token = getCookie("accessToken");

  useEffect(() => {
    dispatch(SET_PRODUCT_LIST({ accountname, token }));
  }, []);

  return (
    !!products.length && (
      <Container>
        <ProductContainer>
          <Title>판매 중인 상품</Title>
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
