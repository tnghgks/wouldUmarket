import styled from "styled-components";

const MediumDisableBtn = styled.button`
  width: 120px;
  padding: 8px 0;
  border-radius: 30px;
  border: none;
  background-color: var(--accentColor);
  font-family: inherit;
  font-weight: 500;
  font-size: 1.4rem;
  color: white;
`;

function MediumDisableButton() {
  return (
    <>
      <MediumDisableBtn>팔로우</MediumDisableBtn>
    </>
  );
}

export default MediumDisableButton;
