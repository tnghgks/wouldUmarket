import styled from "styled-components";
import IconMoreVerticalSmall from "../../../../Components/icon/IconMoreVerticalSmall";

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

function CommentItem() {
  return (
    <Container>
      <InfoContainer>
        <ProfileImg />
        <CommentInfo>
          <UserName>서귀포시 무슨 농장</UserName>
          <CommentTime>5분전</CommentTime>
        </CommentInfo>
        <IconMoreVerticalSmall />
      </InfoContainer>
      <Comment>당근당근</Comment>
    </Container>
  );
}
export default CommentItem;
