import styled from "styled-components";

const MediumBtn = styled.button`
  width: 120px;
  padding: 8px 0;
  border-radius: 30px;
  border: none;
  background-color: var(--mainColor);
  font-family: inherit;
  font-weight: 500;
  font-size: 1.4rem;
  color: white;
`;

function MediumButton() {
  return (
    <>
      <MediumBtn>팔로우</MediumBtn>
    </>
  );
}

export default MediumButton;
