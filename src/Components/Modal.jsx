import { useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  background: #ffffff;
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  position: fixed;
  bottom: 0px;
  z-index: 10;
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
const BackBlur = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
`;

/**
 *
 * @param {{modalInfo: [ {text: string ; handleFunc: function ;},isOpen:boolean;setIsOpen:function ] }} param0
 * @returns
 */

function Modal({ modalInfo = [], isOpen, setIsOpen }) {
  const backBlur = useRef();

  const modalCloseHandler = ({ target }) => {
    if (isOpen && backBlur.current.contains(target)) setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", modalCloseHandler);
    return () => {
      window.removeEventListener("click", modalCloseHandler);
    };
  });

  return (
    <>
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
      <BackBlur ref={backBlur} />
    </>
  );
}
export default Modal;
