import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import SearchNav from "../../Components/Navbar/SearchNav";
import TabMenu from "../../Components/TabMenu";
import UserSearch from "../../Components/UserSearch";
import { getCookie } from "../../cookie";
import { asyncSearchFetch } from "../../store/SearchData";

function Search() {
  const dispatch = useDispatch();
  const token = getCookie("accessToken");
  const { searchData } = useSelector((state) => state);
  const [pageNum, setPageNum] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [signal, setSignal] = useState(null);
  useEffect(() => {
    if (!searchInput) return;
    if (signal) signal.abort();

    window.scrollTo(0, 0);
    setPageNum(1);
    let controller = new AbortController();
    dispatch(asyncSearchFetch({ searchInput, token, signal: controller.signal }));
    setSignal(controller);
  }, [searchInput]);

  console.log(searchData);

  useEffect(() => {
    if (!searchInput) return;
    dispatch(asyncSearchFetch({ searchInput, token, pageNum }));
  }, [pageNum]);

  useEffect(() => {
    let scrollTimer;

    function handleScrollEvent() {
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
      scrollTimer = setTimeout(function () {
        if (document.body.scrollHeight - (window.pageYOffset + window.innerHeight) < 0) {
          setPageNum((prev) => prev + 1);
        }
      }, 100);
    }

    window.addEventListener("scroll", handleScrollEvent);

    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <>
      <SearchNav value={searchInput} setValue={setSearchInput} />
      <Container>
        {searchData.status === "rejected" && <div>ERROR</div>}
        {!searchData.data.length && searchData.status === "pending" && <Loader />}
        {!!searchData.data.length ? searchData.data.map((userData, index) => <UserSearch key={index} userData={userData} searchInput={searchInput} />) : null}
      </Container>
      <TabMenu />
    </>
  );
}

export default Search;

const Container = styled.main`
  width: 100%;
  margin-top: 48px;
  padding: 20px 16px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 61px;
`;
