import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IconArrowLeft from "../icon/IconArrowLeft";
import IconMoreVertical from "../icon/IconMoreVertical";

/**
 *
 * @param {{sellerName: string}} param0
 * @returns
 */
function ChatNav({ sellerName, isMore = false }) {
  return (
    <Container>
      <Back to={"/feed"}>
        <BackBtnIcon />
      </Back>
      <SellerName>{sellerName}</SellerName>
      {!isMore && (
        <More type="button">
          <MoreIcon />
        </More>
      )}
    </Container>
  );
}

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

export default ChatNav;
