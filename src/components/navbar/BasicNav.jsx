import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { OPEN_MAIN_MODAL } from "../../store/Modal";
import IconArrowLeft from "../icon/IconArrowLeft";
import IconMoreVertical from "../icon/IconMoreVertical";

function BasicNav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleModalClick() {
    dispatch(OPEN_MAIN_MODAL({ modalType: "USER_INFO" }));
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
