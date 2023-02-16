import { useDispatch, useSelector } from "react-redux";
import { PostDelete, PostReport } from "../../api/homepost";
import { CLOSE_ALL_MODAL, OPEN_SUB_MODAL } from "../../store/Modal";
import { SET_USER_POSTS } from "../../store/PostList";
import BasicModal from "./BasicModal";
import SubModal from "./SubModal";

function PostModal() {
  const dispatch = useDispatch();
  const {
    modal: {
      target,
      sub: { modalType, isOpen },
    },
    userInfo: { userId, accountname },
  } = useSelector((state) => state);

  const SUB_MODAL_TYPE = [
    {
      type: "reportPost",
      mainText: "신고하시겠습니까?",
      rightText: "신고",
      handleAccept: handleReportPost,
    },
    {
      type: "deletePost",
      mainText: "삭제하시겠습니까?",
      rightText: "삭제",
      handleAccept: handleDeletePost,
    },
  ];

  async function handleDeletePost() {
    const data = await PostDelete(target.id);
    alert(data.message);
    dispatch(SET_USER_POSTS({ accountname }));
    dispatch(CLOSE_ALL_MODAL());
  }

  async function handleReportPost() {
    const report = await PostReport(target.id);
    if (report) {
      alert("게시물이 신고 되었습니다.");
    } else {
      alert("신고가 정상적으로 되지 않았습니다.");
    }
    dispatch(CLOSE_ALL_MODAL());
  }

  const modalInfo =
    userId === target.author._id
      ? [
          {
            text: "삭제",
            handleFunc: () => {
              dispatch(OPEN_SUB_MODAL({ modalType: "deletePost" }));
            },
          },
        ]
      : [
          {
            text: "신고",
            handleFunc: () => {
              dispatch(OPEN_SUB_MODAL({ modalType: "reportPost" }));
            },
          },
        ];

  function renderSubModal() {
    const findSubModal = SUB_MODAL_TYPE.find((modal) => modal.type === modalType);

    return <SubModal {...findSubModal} />;
  }

  return (
    <>
      {isOpen && renderSubModal()}
      <BasicModal modalInfo={modalInfo} />
    </>
  );
}
export default PostModal;
