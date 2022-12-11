import styled from "styled-components";

const SmallBtn = styled.button`
  width: 56px;
  padding: 7px 0;
  border-radius: 26px;
  border: none;
  background-color: var(--mainColor);
  font-family: inherit;
  font-weight: 400;
  font-size: 1.2rem;
  color: white;
`;

function SmallButton() {
  return (
    <>
      <SmallBtn>팔로우</SmallBtn>
    </>
  );
}

export default SmallButton;
