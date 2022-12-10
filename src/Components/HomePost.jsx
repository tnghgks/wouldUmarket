import styled from "styled-components";
import ellipse6Img from "../assets/Ellipse 6.png";
import moreIconImg from "../assets/icon/icon-more-vertical.png";
import postImg from "../assets/post-img-example.png";
import heartIconImg from "../assets/icon/icon-heart.png";
import circleIconImg from "../assets/icon/icon-message-circle.png";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 358px;
  height: 434px;
  background-color: #ffffff;
`;

const Ellipse6Img = styled.img`
  width: 42px;
`;

const MoreIconImg = styled.img`
  width: 18px;
  float: right;
`;

const ContContainer = styled.div`
  margin-top: 5px;
`;

const PostTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 5px;
`;

const PostID = styled.span`
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
`;

const Date = styled.p`
  color: #767676;
`;
function HomePost() {
  return (
    <Container>
      <Ellipse6Img src={ellipse6Img} alt="" />
      <ContContainer>
        <MoreIconImg src={moreIconImg} alt="" />
        <PostTitle>애월읍 위니브 감귤농장</PostTitle>
        <PostID>@ weniv_Mandarin</PostID>
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
    </Container>
  );
}

export default HomePost;
