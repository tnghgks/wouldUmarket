import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../api/product";
import { CLOSE_ALL_MODAL, OPEN_SUB_MODAL } from "../../store/Modal";
import { SET_PRODUCT_LIST } from "../../store/ProductList";
import BasicModal from "./BasicModal";
import SubModal from "./SubModal";

function ProductModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    modal: {
      target,
      sub: { isOpen },
    },
    userInfo: { userId, accountname },
  } = useSelector((state) => state);

  async function handleDeleteProduct() {
    const isSuccess = await deleteProduct(target.id);

    if (isSuccess) {
      dispatch(SET_PRODUCT_LIST(accountname));
      dispatch(CLOSE_ALL_MODAL());
    }
  }

  const modalInfo =
    userId === target.author._id
      ? [
          {
            text: "삭제",
            handleFunc: () => {
              dispatch(OPEN_SUB_MODAL({ modalType: "deleteProduct" }));
            },
          },
          {
            text: "수정",
            handleFunc: () => {
              dispatch(CLOSE_ALL_MODAL());
              navigate(`/profile/editProduct/${target.id}`);
            },
          },
          {
            text: "웹사이트에서 상품 보기",
            handleFunc: () => {
              dispatch(CLOSE_ALL_MODAL());
              window.open(target.link, "_blank");
            },
          },
        ]
      : [
          {
            text: "웹사이트에서 상품 보기",
            handleFunc: () => {
              dispatch(CLOSE_ALL_MODAL());
              window.open(target.link, "_blank");
            },
          },
        ];

  return (
    <>
      {isOpen && (
        <SubModal
          mainText="삭제하시겠습니까?"
          rightText="삭제"
          handleAccept={handleDeleteProduct}
        />
      )}
      <BasicModal modalInfo={modalInfo} />
    </>
  );
}
export default ProductModal;
