import styled from "styled-components";
import HomePost from "../../../Components/HomePost";
import MainNav from "../../../Components/MainNav";
import TabMenu from "../../../Components/TabMenu";

const Container = styled.section``;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 68px;
`;

function FollowingFeed() {
  return (
    <Container>
      <MainNav titleContent="우주쉐어 피드" />
      <PostContainer>
        <HomePost />
        <HomePost />
        <HomePost />
      </PostContainer>
      <TabMenu />
    </Container>
  );
}

export default FollowingFeed;
