import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import SearchNav from "../../Components/Navbar/SearchNav";
import NotFoundResult from "../../Components/NotFoundResult";
import TabMenu from "../../Components/TabMenu";
import UserSearch from "../../Components/UserSearch";
// import { getCookie } from "../../cookie";
import { asyncSearchFetch } from "../../store/SearchData";
import iconDelete from "../../assets/icon/icon-delete.svg";

function Search() {
  const dispatch = useDispatch();
  // const token = getCookie("accessToken");
  const { searchData } = useSelector((state) => state);
  const [pageNum, setPageNum] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [signal, setSignal] = useState(null);
  const [recentSearched, setRecentSearched] = useState(null);
  const [bottom, setBottom] = useState(null);
  const bottomObserver = useRef(null);

  useEffect(() => {
    const prevCookie = JSON.parse(localStorage.getItem("recentSearched"));
    setRecentSearched(prevCookie);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPageNum((prev) => prev + 1);
      }
    });
    bottomObserver.current = observer;
  }, []);

  useEffect(() => {
    const observer = bottomObserver.current;
    if (bottom) {
      observer.observe(bottom);
    }

    return () => {
      if (bottom) {
        observer.unobserve(bottom);
      }
    };
  }, [bottom]);

  useEffect(() => {
    if (!searchInput) return;
    if (signal) signal.abort();
    window.scrollTo(0, 0);
    setPageNum(1);
    let controller = new AbortController();
    dispatch(asyncSearchFetch({ searchInput, signal: controller.signal }));
    setSignal(controller);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  useEffect(() => {
    if (!searchInput) return;

    dispatch(asyncSearchFetch({ searchInput, pageNum }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  function handleDeleteBtn(targetIndex) {
    setRecentSearched(recentSearched.filter((_, index) => !(index === targetIndex)));
    window.localStorage.setItem("recentSearched", JSON.stringify(recentSearched.filter((_, index) => !(index === targetIndex))));
  }

  return (
    <>
      <SearchNav value={searchInput} setValue={setSearchInput} />
      <Container>
        {!searchInput && searchData.status !== "pending" && (
          <RecentList>
            <Item>최근 검색 결과</Item>
            {recentSearched?.map((userData, index) => (
              <Item>
                <UserSearch key={index} userData={userData} searchInput={searchInput} />
                <DeleteBtn onClick={() => handleDeleteBtn(index)}>
                  <img src={iconDelete} alt="삭제 버튼" />
                </DeleteBtn>
              </Item>
            ))}
          </RecentList>
        )}
        {searchData.status === "rejected" && <div>ERROR</div>}
        {!searchData.data.length && searchData.status === "pending" && <Loader />}
        {!!searchData.data.length &&
          searchInput &&
          searchData.data.map((userData, index) => (
            <Item key={crypto.randomUUID()}>
              <UserSearch key={crypto.randomUUID()} userData={userData} searchInput={searchInput} />
            </Item>
          ))}
        {!searchData.data.length && searchData.status === "fulfilled" && <NotFoundResult />}
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
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 61px;
`;

const RecentList = styled.ul`
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
