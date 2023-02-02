import styled from "styled-components";

function CommonInput({ label, register, ...option }) {
  return (
    <TextActiveInputContainer>
      <TextActiveInputLabel htmlFor={register?.name || option.name}>
        {label}
      </TextActiveInputLabel>
      <ActiveTextInput {...register} {...option} />
    </TextActiveInputContainer>
  );
}

export default CommonInput;

const TextActiveInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const TextActiveInputLabel = styled.label`
  font-size: 1.2rem;
  color: #767676;
  font-weight: 500;
  font-family: "Godo", sans-serif;
`;

const ActiveTextInput = styled.input`
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
