import styled from "styled-components";
import HomePost from "../../../Components/HomePost";
import MainNav from "../../../Components/MainNav";
import TabMenu from "../../../Components/TabMenu";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 68px;
`;

function FollowingFeed() {
  return (
    <>
      <MainNav titleContent="우주쉐어 피드" />
      <PostContainer>
        <HomePost />
        <HomePost />
        <HomePost />
      </PostContainer>
      <TabMenu />
    </>
  );
}

export default FollowingFeed;
