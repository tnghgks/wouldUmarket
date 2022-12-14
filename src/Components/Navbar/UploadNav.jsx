import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CommonButton from "../button/CommonButton";
import IconArrowLeft from "../icon/IconArrowLeft";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 48px;
  padding: 0 16px;
  border-bottom: 0.5px solid #dbdbdb;
  background-color: #ffffff;
`;

const Back = styled(Link)`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;
const BackBtnIcon = styled(IconArrowLeft)`
  width: 22px;
  height: 22px;
`;

function UploadNav() {
  return (
    <Container>
      <Back>
        <BackBtnIcon />
      </Back>
      <CommonButton size="ms" bgColor="accent" children="저장" />
    </Container>
  );
}

export default UploadNav;
