import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SearchNav from "../../components/navbar/SearchNav";
import NotFoundResult from "../../components/NotFoundResult";
import TabMenu from "../../components/TabMenu";
import { asyncSearchFetch } from "../../store/SearchData";
import useInfinityScroll from "../../lib/hooks/useInfinityScroll";
import useDebouncing from "../../lib/hooks/useDebounce";
import RecentList from "./RecentList/RecentList";
import SearchResult from "./SearchResult/SearchResult";

function Search() {
  const dispatch = useDispatch();
  const { searchData } = useSelector((state) => state);
  const [searchInput, setSearchInput] = useState("");
  const [setBottom, pageNum, resetPageNum] = useInfinityScroll();
  const search = useCallback(() => {
    dispatch(asyncSearchFetch({ searchInput }));
  }, [searchInput, dispatch]);
  const getSearchData = useDebouncing(search, 300);

  useEffect(() => {
    if (!searchInput) return;

    resetPageNum();

    getSearchData();
  }, [searchInput, resetPageNum, getSearchData]);

  const isViewRecent = !searchInput && searchData.status !== "pending";
  const isViewSearchData = !!searchData.data.length && searchInput;
  const isViewNotFound =
    !searchData.data.length && searchInput && searchData.status === "fulfilled";

  return (
    <>
      <header>
        <h1 className="ir-hidden">검색 페이지</h1>
        <SearchNav value={searchInput} setValue={setSearchInput} />
      </header>
      <Container>
        <h2 className="ir-hidden">검색 결과</h2>
        {isViewRecent && <RecentList />}
        {isViewSearchData && (
          <SearchResult searchData={searchData} searchInput={searchInput} pageNum={pageNum} />
        )}
        {isViewNotFound && <NotFoundResult />}
        <div ref={setBottom} />
      </Container>
      <TabMenu />
    </>
  );
}

export default Search;

const Container = styled.main`
  width: 100%;
  overflow-x: hidden;
  margin-top: 48px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin-bottom: 61px;
`;
