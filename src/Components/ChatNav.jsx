import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IconArrowLeft from "./icon/IconArrowLeft";
import IconMoreVertical from "./icon/IconMoreVertical";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 48px;
  padding: 0 12px 0 16px;
`;

const Back = styled(Link)`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

const SellerName = styled.h2`
  flex: 1;
  margin-left: 10px;
  font-family: "Godo";
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.753rem;
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
/**
 *
 * @param {{sellerName: string}} param0
 * @returns
 */
function ChatNav({ sellerName }) {
  return (
    <Container>
      <Back>
        <BackBtnIcon />
      </Back>
      <SellerName>{sellerName}</SellerName>
      <More type="button">
        <MoreIcon />
      </More>
    </Container>
  );
}

export default ChatNav;
