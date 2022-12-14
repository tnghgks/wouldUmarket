import styled from "styled-components";
import MainNav from "../../../Components/Navbar/MainNav";
import TabMenu from "../../../Components/TabMenu";
import UserFollow from "../../../Components/UserFollow";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  margin-top: 48px;
  padding: 24px 16px;
`;
const FollowContainer = styled.section`
  width: 358px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function Followers() {
  return (
    <>
      <MainNav titleContent="Follower" />
      <Container>
        <FollowContainer>
          <UserFollow />
          <UserFollow />
        </FollowContainer>
      </Container>
      <TabMenu />
    </>
  );
}
export default Followers;
