import styled from "styled-components";
import BasicProfileImg from "../../../../Components/BasicProfileImg";
import MediumButton from "../../../../Components/button/MediumButton";
import iconMessageCircle from "../../../../assets/icon/icon-message-circle.svg";
import iconShare from "../../../../assets/icon/icon-share.png";

const Container = styled.section`
  width: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  margin-bottom: 6px;
`;

const FollowInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 48px;
  gap: 6px;
  span:first-child {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.3rem;
  }
  span:nth-child(2) {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.2rem;
    color: #767676;
  }
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 41px;
  margin-top: 30px;
`;

const UserNicname = styled.strong`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;
  margin-top: 16px;
`;
const UserId = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: #767676;
  margin-top: 6px;
`;
const UserDiscription = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.84rem;
  color: #767676;
  margin-top: 16px;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
`;
const Btn = styled.button`
  width: 34px;
  height: 34px;
  border: 1px solid #dbdbdb;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  img {
    width: 20px;
    height: 20px;
  }
`;
function UserInfo() {
  return (
    <Container>
      <RowContainer>
        <FollowInfo>
          <span>2950</span>
          <span>followers</span>
        </FollowInfo>
        <BasicProfileImg />
        <FollowInfo>
          <span>128</span>
          <span>followings</span>
        </FollowInfo>
      </RowContainer>
      <UserNicname>애월읍 위니브 감귤농장</UserNicname>
      <UserId>@ weniv_Mandarin</UserId>
      <UserDiscription>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장</UserDiscription>
      <BtnContainer>
        <Btn>
          <img src={iconMessageCircle} alt="메세지 버튼" />
        </Btn>
        <MediumButton></MediumButton>
        <Btn>
          <img src={iconShare} alt="공유 버튼" />
        </Btn>
      </BtnContainer>
    </Container>
  );
}
export default UserInfo;
