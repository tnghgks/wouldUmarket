import { useDispatch, useSelector } from "react-redux";
import { deleteComment, reportComment } from "../../api/post";
import { CLOSE_ALL_MODAL, OPEN_SUB_MODAL } from "../../store/Modal";
import { FETCH_COMMENT_DATA } from "../../store/PostDetail";
import BasicModal from "./BasicModal";
import SubModal from "./SubModal";

function CommentModal() {
  const dispatch = useDispatch();
  const {
    modal: {
      target,
      sub: { modalType, isOpen },
    },
    userInfo: { userId },
  } = useSelector((state) => state);

  const SUB_MODAL_TYPE = [
    {
      type: "reportComment",
      mainText: "신고하시겠습니까?",
      rightText: "신고",
      handleAccept: handleReportComment,
    },
    {
      type: "deleteComment",
      mainText: "삭제하시겠습니까?",
      rightText: "삭제",
      handleAccept: handleDeleteComment,
    },
  ];

  async function handleDeleteComment() {
    const isSuccess = await deleteComment({ id: target.postId, comment: target.comment });
    if (isSuccess) {
      dispatch(CLOSE_ALL_MODAL());
      dispatch(FETCH_COMMENT_DATA({ id: target.postId }));
    }
  }

  async function handleReportComment() {
    try {
      const report = await reportComment({ id: target.postId, comment: target.comment });
      if (report) {
        alert("댓글이 신고 되었습니다.");
      } else {
        alert("신고가 정상적으로 되지 않았습니다.");
      }
      dispatch(CLOSE_ALL_MODAL());
    } catch (error) {
      console.log(error);
    }
  }

  const modalInfo =
    userId === target.comment.author._id
      ? [
          {
            text: "삭제",
            handleFunc: () => {
              dispatch(OPEN_SUB_MODAL({ modalType: "deleteComment" }));
            },
          },
        ]
      : [
          {
            text: "신고",
            handleFunc: () => {
              dispatch(OPEN_SUB_MODAL({ modalType: "reportComment" }));
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
export default CommentModal;
