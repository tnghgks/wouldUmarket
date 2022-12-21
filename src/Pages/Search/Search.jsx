import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SearchNav from "../../Components/Navbar/SearchNav";
import TabMenu from "../../Components/TabMenu";
import UserSearch from "../../Components/UserSearch";
import { getCookie } from "../../cookie";
import { asyncSearchFetch } from "../../store/SearchData";

const Container = styled.main`
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
  const dispatch = useDispatch();
  const token = getCookie("accessToken");
  const { searchData } = useSelector((state) => state);
  const [searchInput, setSearchInput] = useState("");
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (searchInput === "") return;
    clearTimeout(timer);
    setTimer(
      setTimeout(function () {
        dispatch(asyncSearchFetch({ searchInput, token }));
      }, 500)
    );
  }, [searchInput]);

  return (
    <>
      <SearchNav setValue={setSearchInput} />
      <Container>
        {searchData.status === "rejected" && <div>ERROR</div>}
        {searchData.data && searchData.data.map((userData, index) => <UserSearch key={index} userData={userData} />)}
      </Container>
      <TabMenu />
    </>
  );
}

export default Search;
