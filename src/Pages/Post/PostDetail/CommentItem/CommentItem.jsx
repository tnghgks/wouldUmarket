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

function CommentItem({ comment, onClick }) {
  return (
    <Container>
      <InfoContainer>
        <ProfileImg src={comment.author.image} />
        <CommentInfo>
          <UserName>{comment.author.username}</UserName>
          <CommentTime>{elapsedTime(comment.createdAt)}</CommentTime>
        </CommentInfo>
        <IconMoreVerticalSmall onClick={() => onClick(comment.id)} />
      </InfoContainer>
      <Comment>{comment.content}</Comment>
    </Container>
  );
}
export default CommentItem;
