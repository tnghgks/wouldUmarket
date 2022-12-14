import styled from "styled-components";
import SearchNav from "../../Components/Navbar/SearchNav";
import TabMenu from "../../Components/TabMenu";
import UserSerch from "../../Components/UserSerch";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  margin-top: 48px;
  padding: 20px 16px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function Search() {
  return (
    <>
      <SearchNav />
      <Container>
        <UserSerch />
        <UserSerch />
        <UserSerch />
      </Container>
      <TabMenu />
    </>
  );
}

export default Search;
