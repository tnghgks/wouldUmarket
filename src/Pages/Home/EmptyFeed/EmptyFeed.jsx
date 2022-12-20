import styled from "styled-components";
import { Link } from "react-router-dom";
import SymbolLogoGray from "../../../Components/SymbolLogoGray";
import CommonButton from "../../../Components/button/CommonButton";
import MainNav from "../../../Components/Navbar/MainNav";
import TabMenu from "../../../Components/TabMenu";

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 20px;
`;

const Desc = styled.p`
  font-size: 1.4rem;
  color: #767676;
`;

function EmptyFeed() {
  return (
    <>
      <MainNav titleContent="우주쉐어 피드" />
      <FeedContainer>
        <SymbolLogoGray />
        <Desc>유저를 검색해 팔로우 해보세요!</Desc>
        <Link to={`/search`}>
          <CommonButton size="md" bgColor="main" children="검색하기" />
        </Link>
      </FeedContainer>
      <TabMenu />
    </>
  );
}

export default EmptyFeed;
