import styled from "styled-components";
import Navbar from "../../Components/Navbar";
import TabMenu from "../../Components/TabMenu";
import UserSerch from "../../Components/UserSerch";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding: 20px 16px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function Search() {
  return (
    <>
      <Navbar leftType="back" centerType="title" centercontent={""} rightType={"input"}></Navbar>
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
