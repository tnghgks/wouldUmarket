import styled from "styled-components";
import UserSearch from "../../../components/UserSearch";

export default function SearchResult({ searchData, searchInput, pageNum }) {
  return (
    <Container>
      {searchData.data.slice(0, pageNum * 100).map((userData, index) => (
        <Item key={index}>
          <UserSearch userData={userData} searchInput={searchInput} />
        </Item>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
`;
