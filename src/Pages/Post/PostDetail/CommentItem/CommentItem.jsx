import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import IconMoreVerticalSmall from "../../../../Components/icon/IconMoreVerticalSmall";
import { getCookie } from "../../../../cookie";
import { CLOSE_MODAL, MODAL_TARGET, SET_MAIN_MODAL, SET_SUB_MODAL } from "../../../../store/Modal";
import { FETCH_COMMENT_DATA } from "../../../../store/PostDetail";

const Container = styled.div`
  width: 358px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 16px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 4px;
`;

const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border: 0.5px solid #dbdbdb;
  border-radius: 50%;
`;
const CommentInfo = styled.div`
  margin-right: auto;
  margin-left: 12px;
  margin-top: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CommentTime = styled.span`
  display: inline-block;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.3rem;
  color: #767676;
  &::before {
    content: "• ";
    color: #767676;
    margin-left: 6px;
  }
`;

const UserName = styled.strong`
  font-family: "godo";
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Comment = styled.div`
  margin-left: 48px;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.8rem;
`;

function elapsedTime(date) {
  const start = new Date(date);
  const end = new Date();

  const diff = (end - start) / 1000;

  const formatter = new Intl.RelativeTimeFormat("ko", {
    numeric: "auto",
  });

  const times = [
    { name: "year", milliSeconds: 60 * 60 * 24 * 365 },
    { name: "month", milliSeconds: 60 * 60 * 24 * 30 },
    { name: "day", milliSeconds: 60 * 60 * 24 },
    { name: "hour", milliSeconds: 60 * 60 },
    { name: "minute", milliSeconds: 60 },
  ];

  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    if (betweenTime > 0) {
      return formatter.format(betweenTime * -1, value.name);
    }
  }
  return "방금 전";
}

function CommentItem({ comment, setModalInfo, setSubModalData }) {
  const dispatch = useDispatch();
  const token = getCookie("accessToken");
  const {
    postDetail: {
      post: { id },
    },
    userInfo: { userId },
  } = useSelector((state) => state);

  async function handleDeleteComment() {
    try {
      const response = await fetch(`https://mandarin.api.weniv.co.kr/post/${id}/comments/${comment.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      alert(data.message);
      dispatch(CLOSE_MODAL());
      dispatch(FETCH_COMMENT_DATA({ id, token }));
    } catch (error) {
      console.log(error);
    }
  }

  async function handleReportComment() {
    try {
      const response = await fetch(`https://mandarin.api.weniv.co.kr/post/${id}/comments/${comment.id}/report`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const { report } = await response.json();
      if (report) {
        alert("댓글이 신고 되었습니다.");
      } else {
        alert("신고가 정상적으로 되지 않았습니다.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleModalOpen() {
    dispatch(SET_MAIN_MODAL());
    if (userId === comment.author._id) {
      setModalInfo([
        {
          text: "삭제",
          handleFunc: () => {
            dispatch(SET_SUB_MODAL());
            setSubModalData({ text: "삭제하시겠습니까?", rightText: "삭제", handleFunc: handleDeleteComment });
            dispatch(MODAL_TARGET(comment.id));
          },
        },
      ]);
    } else {
      setModalInfo([
        {
          text: "신고",
          handleFunc: () => {
            dispatch(SET_SUB_MODAL());
            setSubModalData({ text: "신고하시겠습니까?", rightText: "신고", handleFunc: handleReportComment });
            dispatch(MODAL_TARGET(comment.id));
          },
        },
      ]);
    }
  }

  return (
    <Container>
      <InfoContainer>
        <ProfileImg src={comment.author.image} />
        <CommentInfo>
          <UserName>{comment.author.username}</UserName>
          <CommentTime>{elapsedTime(comment.createdAt)}</CommentTime>
        </CommentInfo>
        <IconMoreVerticalSmall onClick={handleModalOpen} />
      </InfoContainer>
      <Comment>{comment.content}</Comment>
    </Container>
  );
}
export default CommentItem;
