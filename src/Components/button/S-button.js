import styled from "styled-components";

const Button = styled.button`
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
      <Button>팔로우</Button>
    </>
  );
}

export default SmallButton;
