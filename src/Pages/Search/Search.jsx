import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SearchNav from "../../Components/Navbar/SearchNav";
import TabMenu from "../../Components/TabMenu";
import UserSearch from "../../Components/UserSearch";

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
  const [value, setValue] = useState("");
  const [timer, setTimer] = useState(null);
  const [SearchData, setSearchData] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTZlODNmMTdhZTY2NjU4MWMzNTJkZCIsImV4cCI6MTY3NjM4MjY0MywiaWF0IjoxNjcxMTk4NjQzfQ.GodR9l7MkLe9xeBl9Rl98Yn8vmbAJgkPC-p-xSCzYdA";

  async function getSearchData() {
    const response = await fetch(`https://mandarin.api.weniv.co.kr/user/searchuser/?keyword=${value}&limit=100`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    setSearchData(data);
  }

  useEffect(() => {
    if (value === "") return;
    clearTimeout(timer);
    setTimer(
      setTimeout(function () {
        getSearchData();
      }, 500)
    );
  }, [value]);

  return (
    <>
      <SearchNav setValue={setValue} />
      <Container>{SearchData && SearchData.map((userData, index) => <UserSearch key={index} userData={userData} />)}</Container>
      <TabMenu />
    </>
  );
}

export default Search;
