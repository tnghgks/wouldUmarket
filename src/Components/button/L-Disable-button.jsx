import styled from "styled-components";

const Button = styled.button`
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
      <Button>다음</Button>
    </>
  );
}

export default LargeDisableButton;
