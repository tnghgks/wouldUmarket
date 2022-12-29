import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getCookie, removeCookie } from "../../cookie";
import { CLOSE_MODAL, SET_MAIN_MODAL, SET_SUB_MODAL } from "../../store/Modal";
import { SET_PROFILE } from "../../store/Profile";
import IconArrowLeft from "../icon/IconArrowLeft";
import IconMoreVertical from "../icon/IconMoreVertical";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 48px;
  padding: 0 12px 0 16px;
  border-bottom: 0.5px solid #dbdbdb;
  background-color: #ffffff;
  z-index: 10;
`;

const Back = styled(Link)`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

const More = styled.button`
  width: 22px;
  height: 22px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const BackBtnIcon = styled(IconArrowLeft)`
  width: 22px;
  height: 22px;
`;

const MoreIcon = styled(IconMoreVertical)`
  width: 24px;
  height: 24px;
`;

function BasicNav({ setModalInfo, setSubModalData }) {
  const navigate = useNavigate();
  const token = getCookie("accessToken");
  const dispatch = useDispatch();
  const {
    userInfo: { accountname },
  } = useSelector((state) => state);

  function handleModalClick() {
    dispatch(SET_MAIN_MODAL());
    setModalInfo([
      {
        text: "설정 및 개인정보",
        handleFunc: () => {
          dispatch(CLOSE_MODAL());
          dispatch(SET_PROFILE({ accountname, token }));
          window.location.href = `/profile/${accountname}`;
        },
      },
      {
        text: "로그아웃",
        handleFunc: () => {
          setSubModalData((state) => {
            return { ...state, text: "로그아웃하시겠습니까?", rightText: "로그아웃", handleFunc: handleLogout };
          });
          dispatch(SET_SUB_MODAL());
        },
      },
    ]);
  }

  function handleLogout() {
    dispatch(CLOSE_MODAL());
    removeCookie("accessToken");
    navigate("/login");
  }

  return (
    <Container>
      <Back
        onClick={() => {
          navigate(-1);
        }}
      >
        <BackBtnIcon />
      </Back>
      <More type="button">
        <MoreIcon onClick={handleModalClick} />
      </More>
    </Container>
  );
}

export default BasicNav;
