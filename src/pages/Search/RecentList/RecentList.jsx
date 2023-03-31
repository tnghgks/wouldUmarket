import { useEffect, useState } from "react";
import styled from "styled-components";
import UserSearch from "../../../components/UserSearch";
import iconDelete from "../../../assets/icon/icon-delete.svg";
import { LocalStorage } from "../../../lib/util/localStorage";

export default function RecentList() {
  const [recentSearched, setRecentSearched] = useState(null);

  useEffect(() => {
    const prevCookie = LocalStorage.getStorage("recentSearched");

    setRecentSearched(prevCookie);
  }, []);

  function handleDeleteBtn(targetIndex) {
    const removedItem = recentSearched.filter((_, index) => index !== targetIndex);

    setRecentSearched(removedItem);

    LocalStorage.setStorage("recentSearched", removedItem);
  }

  return (
    <Container>
      <Item>최근 검색 결과</Item>
      {recentSearched?.map((userData, index) => (
        <Item key={index}>
          <UserSearch userData={userData} />
          <DeleteBtn onClick={() => handleDeleteBtn(index)}>
            <img src={iconDelete} alt="삭제 버튼" />
          </DeleteBtn>
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

const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const Item = styled.li`
  display: flex;
  justify-content: space-between;
`;
