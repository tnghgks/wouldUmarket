import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MediumSmallDisableButton from "./button/MediumSmallDisableBtn";
import IconArrowLeft from "./icon/IconArrowLeft";
import IconMoreVertical from "./icon/IconMoreVertical";
import IconSearch from "./icon/IconSearch";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 12px;
  border: 1px solid red;
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

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.2rem;
`;

const SellerName = styled.h2`
  flex: 1;
  margin-left: 10px;
  font-size: 1.4rem;
  line-height: 1.753rem;
`;

const Search = styled(Link)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Input = styled.input`
  flex-grow: 1;
  height: 32px;
  border: none;
  border-radius: 32px;
  margin-left: 20px;
  padding: 7px 16px;
  background-color: #f2f2f2;
  font-size: 1.4rem;
  font-family: "Godo";

  ::placeholder {
    color: #c4c4c4;
  }
  :focus {
    outline: none;
  }
`;
/**
 * @param {{onBack?: import('react').MouseEventHandler<HTMLAnchorElement>}} param0
 * @returns
 */
function LeftComponent({ leftType, onBack }) {
  switch (leftType) {
    case "back":
      return (
        <Back>
          <IconArrowLeft />
        </Back>
      );
    default:
      return null;
  }
}

/**
 * @param {{centerType?: 'title' | 'sellerName';}} param0
 * @returns
 */
function CenterComponent({ centerType, centercontent }) {
  switch (centerType) {
    case "title":
      return <Title>{centercontent}</Title>;
    case "sellerName":
      return <SellerName>{centercontent}</SellerName>;
    default:
      return null;
  }
}

function RightComponent({ rightType }) {
  switch (rightType) {
    case "more":
      return (
        <More type="button">
          <IconMoreVertical />
        </More>
      );
    case "input":
      return <Input placeholder="계정 검색" />;
    case "search":
      return (
        <Search>
          <IconSearch />
        </Search>
      );
    case "save":
      return <MediumSmallDisableButton />;
    default:
      return null;
  }
}

/**
 * @param {{leftType?: 'back' ; centerType?: 'title' | 'sellerName';centercontent?: string; rightType?: 'more' |'input'| 'search' | 'save'}} param0
 * @returns
 */
export default function Navbar({
  leftType,
  centerType,
  centercontent,
  rightType,
}) {
  return (
    <Container>
      {leftType && (
        <LeftComponent
          leftType={leftType}
          onBack={(e) => {
            e.preventDefault();
          }}
        />
      )}
      {centerType && (
        <CenterComponent
          centerType={centerType}
          centercontent={centercontent}
        />
      )}
      {rightType && (
        <RightComponent
          rightType={rightType}
          onSearch={(e) => {
            e.preventDefault();
          }}
        />
      )}
    </Container>
  );
}
