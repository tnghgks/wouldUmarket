import styled from "styled-components";
import BasicProfileImg from "../Components/BasicProfileImg";
import IconMoreVerticalSmall from "../Components/icon/IconMoreVerticalSmall";
import postImg from "../assets/post-img-example.png";
import heartIconImg from "../assets/icon/icon-heart.png";
import circleIconImg from "../assets/icon/icon-message-circle.png";

const PostContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 358px;
  height: 434px;
  background-color: #ffffff;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;
const ProfileImg = styled(BasicProfileImg)`
  width: 42px;
  height: 42px;
`;

const MoreIconImg = styled(IconMoreVerticalSmall)`
  margin-left: auto;
  margin-bottom: auto;
  margin-top: 3px;
  cursor: pointer;
`;

const ContContainer = styled.div`
  margin-left: 55px;
`;

const UserName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 5px;
`;

const UserID = styled.span`
  font-size: 1.2rem;
  color: #767676;
`;

const Cont = styled.p`
  font-size: 1.4rem;
  margin: 16px 0;
`;

const PostImg = styled.img`
  width: 304px;
`;

const ReactContainer = styled.div`
  margin: 12px 0 16px;
  display: flex;
`;

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 1.2rem;
  color: #767676;
`;

const IconImg = styled.img`
  width: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

const Date = styled.p`
  color: #767676;
`;
function HomePost() {
  return (
    <PostContainer>
      <TitleContainer>
        <ProfileImg />
        <div>
          <UserName>애월읍 위니브 감귤농장</UserName>
          <UserID>@ weniv_Mandarin</UserID>
        </div>
        <MoreIconImg />
      </TitleContainer>
      <ContContainer>
        <Cont>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, tempore?
          Consequuntur, voluptates explicabo blanditiis nam, illo iure ea illum
          repudiandae ut in provident quasi hic quidem, obcaecati enim officia
          tenetur!
        </Cont>
        <PostImg src={postImg} alt="숲 속 마을 이미지" />
        <ReactContainer>
          <IconContainer>
            <IconImg src={heartIconImg} alt="하트 아이콘" />
            58
          </IconContainer>
          <IconContainer>
            <IconImg src={circleIconImg} alt="말풍선 아이콘" />
            12
          </IconContainer>
        </ReactContainer>
        <Date>2020년 10월 21일</Date>
      </ContContainer>
    </PostContainer>
  );
}

export default HomePost;
