import { useEffect, useState } from "react";
import styled from "styled-components";
import UserSearch from "../../../Components/UserSearch";
import iconDelete from "../../../assets/icon/icon-delete.svg";

export default function RecentList() {
  const [recentSearched, setRecentSearched] = useState(null);

  useEffect(() => {
    const prevCookie = JSON.parse(localStorage.getItem("recentSearched"));
    setRecentSearched(prevCookie);
  }, []);

  function handleDeleteBtn(targetIndex) {
    setRecentSearched(recentSearched.filter((_, index) => !(index === targetIndex)));
    window.localStorage.setItem("recentSearched", JSON.stringify(recentSearched.filter((_, index) => !(index === targetIndex))));
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
