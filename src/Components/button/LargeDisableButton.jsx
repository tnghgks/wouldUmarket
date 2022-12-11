import styled from "styled-components";

const LargeDisableBtn = styled.button`
  width: 322px;
  padding: 13px 0;
  border-radius: 44px;
  border: none;
  background-color: var(--accentColor);
  font-family: inherit;
  font-weight: 500;
  font-size: 1.4rem;
  color: white;
`;

function LargeDisableButton() {
  return (
    <>
      <LargeDisableBtn>다음</LargeDisableBtn>
    </>
  );
}

export default LargeDisableButton;
