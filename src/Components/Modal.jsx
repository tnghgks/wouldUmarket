import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 300px;
  background: #ffffff;
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
`;
const Bar = styled.div`
  width: 50px;
  height: 4px;
  background-color: #dbdbdb;
  border-radius: 5px;
  margin-top: 16px;
`;
const ItemList = styled.ul`
  width: 100%;
  li {
    width: 100%;
    padding: 14px 26px;
    cursor: pointer;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`;
/**
 *
 * @param {{modalInfo: [ {text: string ; handleFunc: function ;} ] }} param0
 * @returns
 */

function Modal({ modalInfo = [] }) {
  return (
    <Container>
      <Bar />
      <ItemList>
        {modalInfo &&
          modalInfo.map((modalItem, index) => (
            <li key={index} onClick={modalItem.handleFunc}>
              {modalItem.text}
            </li>
          ))}
      </ItemList>
    </Container>
  );
}
export default Modal;
