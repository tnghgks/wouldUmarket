import styled from "styled-components";
import SymbolLogoGray from "../../../Components/SymbolLogoGray";
import CommonButton from "../../../Components/button/CommonButton";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  min-height: 100vh;
`;

const Desc = styled.p`
  font-size: 1.4rem;
  color: #767676;
`;

function EmptyFeed() {
  return (
    <Container>
      <SymbolLogoGray />
      <Desc>유저를 검색해 팔로우 해보세요!</Desc>
      <CommonButton size="md" bgColor="main" children="검색하기" />
    </Container>
  );
}

export default EmptyFeed;
