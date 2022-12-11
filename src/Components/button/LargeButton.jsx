import styled from "styled-components";

const LargeBtn = styled.button`
  width: 322px;
  padding: 13px 0;
  border-radius: 44px;
  border: none;
  background-color: var(--mainColor);
  font-family: inherit;
  font-weight: 500;
  font-size: 1.4rem;
  color: white;
`;

function LargeButton() {
  return (
    <>
      <LargeBtn>다음</LargeBtn>
    </>
  );
}

export default LargeButton;
