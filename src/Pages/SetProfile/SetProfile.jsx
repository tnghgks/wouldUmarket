import styled from "styled-components";
import BasicProfileImg from "../../Components/BasicProfileImg";
import UploadFile from "../../Components/UploadFile";
import CommonInput from "../../Components/CommonInput";
import CommonButton from "../../Components/button/CommonButton";

const Container = styled.section`
  width: 390px;
  margin: 20px auto;
  padding: 30px 34px;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 12px;
`;

const TitleDesc = styled.p`
  font-size: 1.4rem;
  text-align: center;
  color: #767676;
`;

const ProfileImgContainer = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  margin: 30px auto;
`;

const UploadfileImgBtn = styled.button`
  position: absolute;
  background: none;
  border: none;
  bottom: 0;
  right: 0;
`;

const Uploadfile = styled(UploadFile)`
  width: 36px;
  height: 36px;
`;

const TextContainer = styled.div`
  & > div {
    :nth-child(2) {
      margin: 16px 0;
    }
  }
  & > div {
    :last-child {
      margin-bottom: 30px;
    }
  }
`;

const TextActivInputContainer = styled.div``;

function SetProfile() {
  return (
    <Container>
      <Title>프로필 설정</Title>
      <TitleDesc>나중에 언제든지 변경할 수 있습니다.</TitleDesc>
      <ProfileImgContainer>
        <BasicProfileImg />
        <UploadfileImgBtn>
          <Uploadfile />
        </UploadfileImgBtn>
      </ProfileImgContainer>
      <TextContainer>
        <TextActivInputContainer>
          <CommonInput
            name="사용자 이름"
            type="text"
            placeholder="2~10자 이내여야 합니다."
          />
        </TextActivInputContainer>
        <TextActivInputContainer>
          <CommonInput
            name="계정 ID"
            type="text"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          />
        </TextActivInputContainer>
        <TextActivInputContainer>
          <CommonInput
            name="소개"
            type="text"
            placeholder="자신과 쉐어할 상품에 대해 소개해주세요!"
          />
        </TextActivInputContainer>
      </TextContainer>
      <CommonButton size="lg" bgColor="light" children="우주쉐어 시작하기" />
    </Container>
  );
}

export default SetProfile;
