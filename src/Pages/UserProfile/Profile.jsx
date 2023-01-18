import UserInfo from "./UserInfo/UserInfo";
import styled from "styled-components";
import UserProducts from "./UserProducts/UserProducts";
import UserPost from "./UserPost/UserPost";
import BasicNav from "../../Components/Navbar/BasicNav";
import TabMenu from "../../Components/TabMenu";
import { useEffect, useState } from "react";
import { getCookie } from "../../cookie";
import { SET_PROFILE } from "../../store/Profile";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Components/Modal";
import DeleteAlert from "../../Components/Button/DeleteAlert";
import { SET_PRODUCT_LIST } from "../../store/ProductList";
import {
  INCREASE_PAGE_NUMBER,
  INITIAL_PAGE_NUMBER,
  SET_USER_POSTS,
} from "../../store/PostList";

function Profile() {
  const dispatch = useDispatch();
  const [modalInfo, setModalInfo] = useState([]);
  const [subModalData, setSubModalData] = useState({});
  const { accountname } = useParams();
  const token = getCookie("accessToken");
  const {
    modalData,
    postList: { pageNum },
  } = useSelector((state) => state);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(INITIAL_PAGE_NUMBER());
    let scrollTimer;

    function handleScrollEvent() {
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
      scrollTimer = setTimeout(function () {
        if (
          document.body.scrollHeight -
            (window.pageYOffset + window.innerHeight) <
          0
        ) {
          dispatch(INCREASE_PAGE_NUMBER());
        }
      }, 100);
    }

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      dispatch(INITIAL_PAGE_NUMBER());
      window.removeEventListener("scroll", handleScrollEvent);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(SET_USER_POSTS({ accountname, token, pageNum }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  useEffect(() => {
    dispatch(SET_PROFILE(accountname));
    dispatch(SET_PRODUCT_LIST(accountname));
    dispatch(SET_USER_POSTS({ accountname, token }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountname]);

  return (
    <>
      <BasicNav setModalInfo={setModalInfo} setSubModalData={setSubModalData} />
      <Container>
        <UserInfo />
        <UserProducts
          setModalInfo={setModalInfo}
          setSubModalData={setSubModalData}
        />
        <UserPost
          setModalInfo={setModalInfo}
          setSubModalData={setSubModalData}
        />
      </Container>
      <TabMenu />
      {modalData.isOpen && <Modal modalInfo={modalInfo} />}
      {modalData.subModal.isOpen && (
        <DeleteAlert
          mainText={subModalData.text}
          rightText={subModalData.rightText}
          handleAccept={subModalData.handleFunc}
        />
      )}
    </>
  );
}
export default Profile;

const Container = styled.main`
  width: 100%;
  height: 100vh;
  margin-top: 48px;
  margin-bottom: 61px;
  background-color: #f2f2f2;
`;
