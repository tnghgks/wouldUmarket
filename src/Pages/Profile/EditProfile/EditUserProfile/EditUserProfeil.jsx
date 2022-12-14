import styled from "styled-components";
import BasicProfileImg from "../../../Components/BasicProfileImg";
import ImgButton from "../../../Components/ImgButton";
import CommonInput from "../../../Components/CommonInput";

// 페이지 전체 컨테이너 컴퍼넌트
const EditProfileContainer = styled.main`
  width: 390px;
  height: 820px;
  margin: 0 auto;
`;

// 프로필 사진 변경 컴퍼넌트
const ProfileContainer = styled.section`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const EditImgContainer = styled.section`
  width: 110px;
  height: 110px;
  border: none;
  background-color: #ffffff;
  position: relative;
`;

const ImgBtn = styled(ImgButton)`
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
`;

// input 컴퍼넌트
const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 30px;
`;

function EditUserProfile() {
  return (
    <EditProfileContainer>
      <headr>navbar</headr>
      <ProfileContainer>
        <EditImgContainer>
          <BasicProfileImg src="" alt="" />
          <ImgBtn src="" alt="" />
        </EditImgContainer>
      </ProfileContainer>
      <InputContainer>
        <CommonInput
          name="사용자 이름"
          type="text"
          placeholder={"2~10자 이내여야 합니다."}
        />
        <CommonInput
          name="계정 ID"
          type="text"
          placeholder={"영문,숫자,특수문자(.),(_))만 사용 가능합니다."}
        />
        <CommonInput
          name="소개"
          type="text"
          placeholder={"자신과 판매할 상품에 대해 소개해 주세요!"}
        />
      </InputContainer>
    </EditProfileContainer>
  );
}

export default EditUserProfile;
