import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CommonButton from "../button/CommonButton";
import IconArrowLeft from "../icon/IconArrowLeft";

/**
 *
 * @param {{children: '저장' | '업로드' , btnDisabled: boolean; onClickUpload: ()=> Promise<void>}} param0
 * @returns
 */
function UploadNav({ children, btnDisabled, onClickUpload, bgColor, ...rest }) {
  const navigate = useNavigate();
  return (
    <Container>
      <h1 className="ir-hidden">upload nav bar</h1>
      <Back
        onClick={() => {
          navigate(-1);
        }}
      >
        <BackBtnIcon />
      </Back>
      <CommonButton
        size="ms"
        bgColor={bgColor}
        children={children}
        disabled={btnDisabled}
        onClick={onClickUpload}
        {...rest}
      />
    </Container>
  );
}

const Container = styled.section`
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
export default UploadNav;
