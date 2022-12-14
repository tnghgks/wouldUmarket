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

function UserProducts({
  product = [
    {
      id: "637c7c0117ae666581be3dc6",
      itemName: "ㅎㅎ",
      price: 9999999,
      link: "ㅎㅎ",
      itemImage: "https://mandarin.api.weniv.co.kr/1669102592788.jpg",
      createdAt: "2022-11-22T07:36:33.179Z",
      updatedAt: "2022-11-22T07:36:33.179Z",
      author: {
        _id: "637c7b6617ae666581be3d6c",
        username: "김희진",
        accountname: "testheejin",
        intro: "hello ㅎㅎ",
        image: "https://mandarin.api.weniv.co.kr/1669102535543.jpg",
        isfollow: false,
        following: ["62d02d6d82fdcc712f4b3fe1", "62d04cf782fdcc712f4b46c0"],
        follower: [],
        followerCount: 0,
        followingCount: 2,
      },
    },
    {
      id: "637c7bef17ae666581be3db6",
      itemName: "같이 산책나가요~",
      price: 9999999,
      link: "2살 남자 산책가는거 좋아해요",
      itemImage: "https://mandarin.api.weniv.co.kr/1669102575223.jpg",
      createdAt: "2022-11-22T07:36:15.457Z",
      updatedAt: "2022-11-22T07:36:15.457Z",
      author: {
        _id: "637c7b6617ae666581be3d6c",
        username: "김희진",
        accountname: "testheejin",
        intro: "hello ㅎㅎ",
        image: "https://mandarin.api.weniv.co.kr/1669102535543.jpg",
        isfollow: false,
        following: ["62d02d6d82fdcc712f4b3fe1", "62d04cf782fdcc712f4b46c0"],
        follower: [],
        followerCount: 0,
        followingCount: 2,
      },
    },
  ],
}) {
  return (
    <Container>
      <ProductContainer>
        <Title>판매 중인 상품</Title>
        <ProductsList>{product && product.map((productItem, index) => <Product key={index} />)}</ProductsList>
      </ProductContainer>
    </Container>
  );
}
export default UserProducts;
