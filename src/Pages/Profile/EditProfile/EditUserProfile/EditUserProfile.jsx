import styled from "styled-components";
import BasicProfileImg from "../../../../Components/BasicProfileImg";
import ImgButton from "../../../../assets/upload-file.png";
import CommonInput from "../../../../Components/CommonInput";
import BasicNav from "../../../../Components/Navbar/UploadNav";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { MODIFY_PROFILE } from "../../../../store/Profile";
import { getCookie } from "../../../../cookie";

// 페이지 전체 컨테이너 컴퍼넌트
const EditProfileContainer = styled.section`
  padding: 78px 34px 0 34px;
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

// input 컴퍼넌트
const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 30px;
`;

const UploadImgInput = styled.input`
  display: none;
`;

const UploadImgDiv = styled.div`
  background-image: url(${ImgButton});
  background-size: contain;
  width: 36px;
  height: 36px;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  cursor: pointer;
`;

const Warning = styled.p`
  font-size: 1.2rem;
  color: #eb5757;
`;

function EditUserProfile() {
  const token = getCookie("accessToken");
  const dispatch = useDispatch();
  const imgFilename = useSelector((state) => state.uploadImage);
  const [userNameError, setUserNameError] = useState("");
  const [userIdError, setUserIdError] = useState("");
  const [userIntroError, setUserIntroError] = useState("");

  // NAME 유효성검사
  function handleUserName(e) {
    const userName = e.target.value;

    // 한글,영어 표현식
    const userNameRegex = /^[ㄱ-ㅎ가-힣a-zA-Z]*$/;

    if (!userName) {
      setUserNameError("사용자 이름을 입력해주세요.");
    } else if (userName.length < 2 || userName.length > 10) {
      setUserNameError("2~10자 이내만 가능합니다.");
    } else if (!userNameRegex.test(userName)) {
      setUserNameError("한글,영문만 가능합니다.");
    } else {
      setUserNameError("");
    }
  }

  // ID 유효성검사
  function handleUserId(e) {
    const userId = e.target.value;

    // 영문,숫자,특수문자 표현식
    const Regex = /^[a-zA-Z0-9._]*$/;

    if (!userId) {
      setUserIdError("계정 ID를 입력해주세요.");
    } else if (!Regex.test(userId)) {
      setUserIdError("영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.");
    } else {
      setUserIdError("");
    }
  }
  // intro 유효성검사
  function handleUserIntro(e) {
    const userIntro = e.target.value;

    if (!userIntro) {
      setUserIntroError("소개를 입력해주세요.");
    }
  }

  // 서버의 url 변환 요청
  async function UserImgSetState(formData) {
    try {
      const res = await fetch(
        `https://mandarin.api.weniv.co.kr/image/uploadfile`,
        {
          method: "POST",
          body: formData,
        }
      );
      const filename = await res.json();
      if (!filename) return;
    } catch (error) {
      console.log(error);
    }
  }

  // 유저입력 데이터 이벤트핸들러
  function handleSubmit(e) {
    e.preventDefault();
    const { userName, userID, aboutMe, imgfile } = e.target;

    const editUserData = {
      user: {
        username: userName.value,
        accountname: userID.value,
        intro: aboutMe.value,
        image: imgFilename.filename,
      },
    };

    const formData = new FormData();
    formData.append("image", imgfile.files[0]);

    dispatch(MODIFY_PROFILE, { editUserData, token });

    UserImgSetState(formData);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <BasicNav children="저장" />
        <EditProfileContainer>
          <ProfileContainer>
            <EditImgContainer>
              <BasicProfileImg />
              <label htmlFor="file">
                <UploadImgDiv></UploadImgDiv>
              </label>
              <UploadImgInput type="file" name="imgfile" id="file" />
            </EditImgContainer>
          </ProfileContainer>
          <InputContainer>
            <CommonInput
              label="사용자 이름"
              type="text"
              placeholder="2~10자 이내여야 합니다."
              name="userName"
              onChange={handleUserName}
              required={true}
            />
            <Warning>{userNameError}</Warning>
            <CommonInput
              label="계정 ID"
              type="text"
              placeholder="영문,숫자,특수문자(.),(_))만 사용 가능합니다."
              name="userID"
              onChange={handleUserId}
              required={true}
            />
            <Warning>{userIdError}</Warning>
            <CommonInput
              label="소개"
              type="text"
              placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
              name="aboutMe"
              onChange={handleUserIntro}
            />
            <Warning>{userIntroError}</Warning>
          </InputContainer>
        </EditProfileContainer>
      </form>
    </>
  );
}

export default EditUserProfile;
