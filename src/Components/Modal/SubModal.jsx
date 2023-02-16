import { useDispatch } from "react-redux";
import styled from "styled-components";
import { CLOSE_SUB_MODAL } from "../../store/Modal";

function SubModal({ mainText, rightText, handleAccept }) {
  const dispatch = useDispatch();

  return (
    <DeleteAlertContainer>
      <DeleteAlertHead>{mainText}</DeleteAlertHead>
      <DeleteAlertDiv>
        <DeleteAlertBtn props={true} onClick={() => dispatch(CLOSE_SUB_MODAL())}>
          취소
        </DeleteAlertBtn>
        <DeleteAlertBtn props={false} onClick={handleAccept}>
          {rightText}
        </DeleteAlertBtn>
      </DeleteAlertDiv>
    </DeleteAlertContainer>
  );
}

export default SubModal;

const DeleteAlertContainer = styled.article`
  width: 252px;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #ffffff;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const DeleteAlertHead = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 22px 0;
`;

const DeleteAlertDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const DeleteAlertBtn = styled.button`
  width: 126px;
  height: 45px;
  border: 0.5px solid rgba(219, 219, 219, 0.5);
  border-left: ${function (props) {
    if (props.props === true) return "none";
  }};
  border-right: none;
  border-bottom: none;
  font-size: 1.4rem;
  font-family: inherit;
  background-color: #ffffff;
  color: ${function (props) {
    if (props.props !== true) return "var(--accentColor)";
  }};
  cursor: pointer;
`;
