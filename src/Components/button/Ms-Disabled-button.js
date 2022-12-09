import styled from "styled-components";

const Button = styled.button`
  width: 90px;
  padding: 7px 0;
  border-radius: 32px;
  border: none;
  background-color: var(--accentColor);
  font-family: inherit;
  font-weight: 500;
  font-size: 1.4rem;
  color: white;
`;

function MediumSmallDisabledButton() {
  return (
    <>
      <Button>저장</Button>
    </>
  );
}

export default MediumSmallDisabledButton;
