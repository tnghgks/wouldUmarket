import styled from "styled-components";
import BasicNav from "../../Components/Navbar/BasicNav";
import Comment from "../../Components/Comment";
import HomePost from "../../Components/HomePost";
import CommentItem from "./CommentItem/CommentItem";
import Modal from "../../Components/Modal";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCookie } from "../../cookie";
import { FETCH_COMMENT_DATA, FETCH_POST_DATA } from "../../store/PostDetail";
import { useDispatch, useSelector } from "react-redux";
import DeleteAlert from "../../Components/Button/DeleteAlert";

function PostDetail() {
  const [subModalData, setSubModalData] = useState({});
  const [modalInfo, setModalInfo] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = getCookie("accessToken");
  const {
    postDetail: { post, comments },
    modalData: { isOpen, subModal },
    userInfo,
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(FETCH_POST_DATA({ id, token }));
    dispatch(FETCH_COMMENT_DATA({ id, token }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header>
        <BasicNav
          setModalInfo={setModalInfo}
          setSubModalData={setSubModalData}
        />
      </header>
      <MainContainer>
        <h1 className="ir-hidden">게시물 상세</h1>
        <PostContainer>
          {Object.keys(post).length !== 0 && (
            <HomePost
              postItem={post}
              setModalInfo={setModalInfo}
              setSubModalData={setSubModalData}
            />
          )}
        </PostContainer>
        <CommentContainer>
          <h2 className="ir-hidden">댓글창</h2>
          {comments &&
            comments.map((comment) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                setSubModalData={setSubModalData}
                setModalInfo={setModalInfo}
              />
            ))}
        </CommentContainer>
      </MainContainer>
      <Comment
        img={userInfo.image}
        placeholder="댓글 입력하기..."
        btn="게시"
        postId={post.id}
      />
      {isOpen && <Modal modalInfo={modalInfo} />}
      {subModal.isOpen && (
        <DeleteAlert
          mainText={subModalData.text}
          rightText={subModalData.rightText}
          handleAccept={subModalData.handleFunc}
        />
      )}
    </>
  );
}

export default PostDetail;

const MainContainer = styled.main`
  width: 100%;
  margin-top: 48px;
  margin-bottom: 61px;
`;
const PostContainer = styled.section`
  border-top: 1px solid #dbdbdb;
  width: 100%;
  padding: 20px 16px;
  display: flex;
  justify-content: center;
`;

const CommentContainer = styled.section`
  border-top: 1px solid #dbdbdb;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 0px;
`;
