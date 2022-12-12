import styled from "styled-components";
import profileImg from "../assets/Ellipse 6.png";
import moreIconImg from "../assets/icon/icon-more-vertical.png";
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
const ProfileImg = styled.img`
  width: 42px;
`;

const MoreIconImg = styled.img`
  width: 18px;
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
  font-weight: 400;
  margin: 15px 0;
`;

const PostImg = styled.img`
  width: 304px;
`;

const ReactContainer = styled.div`
  margin: 10px 0;
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
        <ProfileImg src={profileImg} />
        <div>
          <UserName>애월읍 위니브 감귤농장</UserName>
          <UserID>@ weniv_Mandarin</UserID>
        </div>
        <MoreIconImg src={moreIconImg} alt="" />
      </TitleContainer>
      <ContContainer>
        <Cont>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, tempore?
          Consequuntur, voluptates explicabo blanditiis nam, illo iure ea illum
          repudiandae ut in provident quasi hic quidem, obcaecati enim officia
          tenetur!
        </Cont>
        <PostImg src={postImg} alt="" />
        <ReactContainer>
          <IconContainer>
            <IconImg src={heartIconImg} alt="" />
            58
          </IconContainer>
          <IconContainer>
            <IconImg src={circleIconImg} alt="" />
            12
          </IconContainer>
        </ReactContainer>
        <Date>2020년 10월 21일</Date>
      </ContContainer>
    </PostContainer>
  );
}

export default HomePost;
