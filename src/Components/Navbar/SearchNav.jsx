import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import IconArrowLeft from "../icon/IconArrowLeft";

function SearchNav({ value, setValue }) {
  function handleChange(e) {
    setValue(e.target.value);
  }

  const navigate = useNavigate();
  return (
    <Container>
      <Back
        onClick={() => {
          navigate(-1);
        }}
      >
        <BackBtnIcon />
      </Back>
      <Input placeholder="계정 검색" value={value} onChange={handleChange} />
    </Container>
  );
}
export default SearchNav;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 48px;
  padding: 0 16px;
  border-bottom: 0.5px solid #dbdbdb;
  background-color: #ffffff;
  z-index: 10;
`;
const Back = styled(Link)`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

const Input = styled.input`
  flex-grow: 1;
  height: 32px;
  margin-left: 20px;
  padding: 7px 16px;
  border: none;
  border-radius: 32px;
  background-color: #f2f2f2;
  font-size: 1.4rem;
  font-family: "LINESeedKR-Bd";

  ::placeholder {
    color: #c4c4c4;
  }
  :focus {
    outline: none;
  }
`;
const BackBtnIcon = styled(IconArrowLeft)`
  width: 22px;
  height: 22px;
`;
