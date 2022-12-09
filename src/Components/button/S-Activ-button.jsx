import styled from "styled-components";

const Button = styled.button`
  width: 56px;
  padding: 7px 0;
  border-radius: 26px;
  border: 1px solid #dbdbdb;
  background-color: white;
  font-family: inherit;
  font-weight: 400;
  font-size: 1.2rem;
`;

function SmallActivButton() {
  return (
    <>
      <Button>취소</Button>
    </>
  );
}

export default SmallActivButton;
