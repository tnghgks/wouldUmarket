import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
  z-index: 10;
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
/**
 *
 * @param {{children: '저장' | '업로드' , btnDisabled: boolean}} param0
 * @returns
 */
function UploadNav({ children, btnDisabled }) {
  const navigate = useNavigate();
  return (
    <Container>
      <Back
        onClick={() => {
          navigate(-1);
        }}
      >
        <BackBtnIcon />
      </Back>
      <CommonButton
        size="ms"
        bgColor="accent"
        children={children}
        disabled={btnDisabled}
      />
    </Container>
  );
}

export default UploadNav;
