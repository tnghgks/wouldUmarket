import styled from "styled-components";

const DeletAlertArticle = styled.article`
  width: 252px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
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
`;

function DeleteAlert({ head, cancel, confirm }) {
  return (
    <DeletAlertArticle>
      <DeleteAlertHead>{head}</DeleteAlertHead>
      <DeleteAlertDiv>
        <DeleteAlertBtn props={true}>{cancel}</DeleteAlertBtn>
        <DeleteAlertBtn props={false}>{confirm}</DeleteAlertBtn>
      </DeleteAlertDiv>
    </DeletAlertArticle>
  );
}

export default DeleteAlert;
