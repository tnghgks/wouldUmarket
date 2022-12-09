import styled from "styled-components";

const Button = styled.button`
  width: 120px;
  padding: 8px 0;
  border-radius: 30px;
  border: 1px solid #dbdbdb;
  background-color: white;
  font-family: inherit;
  font-weight: 500;
  font-size: 1.4rem;
`;

function MediumActivButton() {
  return (
    <>
      <Button>언팔로우</Button>
    </>
  );
}

export default MediumActivButton;
