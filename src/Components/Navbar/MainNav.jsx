import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IconSearch from "../icon/IconSearch";

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

const Title = styled.h2`
  font-family: "Godo";
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.2rem;
`;

const Search = styled(Link)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const SearchIcon = styled(IconSearch)`
  width: 24px;
  height: 24px;
`;
/**
 *
 * @param {{titleContent: string*}} param0
 * @returns
 */
function MainNav({ titleContent }) {
  return (
    <Container>
      <Title>{titleContent}</Title>
      <Search to="/search">
        <SearchIcon />
      </Search>
    </Container>
  );
}

export default MainNav;
