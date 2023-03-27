import styled from "styled-components";

function TextActiveInput() {
  return (
    <TextActiveInputContainer>
      <TextActiveInputLabel htmlFor="">이메일</TextActiveInputLabel>
      <ActiveInput type="text" />
    </TextActiveInputContainer>
  );
}

export default TextActiveInput;

const TextActiveInputContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const TextActiveInputLabel = styled.label`
  font-size: 1.2rem;
  color: #767676;
  font-weight: 500;
`;

const ActiveInput = styled.input`
  border: none;
  border-bottom: 1px solid #dbdbdb;
  padding: 10px 0 8px;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 400;
  &:focus {
    outline: none;
  }
`;
