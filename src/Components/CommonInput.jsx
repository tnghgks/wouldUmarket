import styled from "styled-components";

const TextActivInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const TextActivInputLabel = styled.label`
  font-size: 1.2rem;
  color: #767676;
  font-weight: 500;
  font-family: "Godo", sans-serif;
`;

const ActivTextInput = styled.input`
  border: none;
  border-bottom: 1px solid #dbdbdb;
  padding: 10px 0 8px;
  font-family: inherit;
  font-size: 1.4rem;
  &::placeholder {
    color: #dbdbdb;
  }
  outline: none;
  font-weight: 400;
  &:focus {
  }
`;

function CommonInput({ label, name, type, placeholder }) {
  return (
    <TextActivInputContainer>
      <TextActivInputLabel htmlFor={name}>{label}</TextActivInputLabel>
      <ActivTextInput type={type} placeholder={placeholder} name={name} />
    </TextActivInputContainer>
  );
}

export default CommonInput;
