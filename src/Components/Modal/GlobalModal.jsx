import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CLOSE_ALL_MODAL } from "../../store/Modal";
import CommentModal from "./CommentModal";
import PostModal from "./PostModal";
import ProductModal from "./ProductModal";
import UserInfoModal from "./UserInfoModal";

const MODAL_TYPES = {
  postModal: "POST_MODAL",
  useInfoModal: "USER_INFO",
  productModal: "PRODUCT_MODAL",
  commentModal: "COMMENT_MODAL",
};

const MODAL_COMPONENTS = [
  {
    type: MODAL_TYPES.useInfoModal,
    component: <UserInfoModal />,
  },
  {
    type: MODAL_TYPES.postModal,
    component: <PostModal />,
  },
  {
    type: MODAL_TYPES.productModal,
    component: <ProductModal />,
  },
  {
    type: MODAL_TYPES.commentModal,
    component: <CommentModal />,
  },
];

function GlobalModal() {
  const {
    main: { modalType, isOpen },
  } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  if (!isOpen) return;

  const findModal = MODAL_COMPONENTS.find((modal) => {
    return modal.type === modalType;
  });

  const renderModal = () => {
    return findModal.component;
  };

  return (
    <Container>
      {renderModal()}
      <Overlay onClick={() => dispatch(CLOSE_ALL_MODAL())} />
    </Container>
  );
}
export default GlobalModal;

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
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;
