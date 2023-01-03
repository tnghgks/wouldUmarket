import styled from "styled-components";
import BasicProfileImg from "../../Components/ImageComponents/BasicProfileImg";
import ImgButton from "../../assets/upload-file.png";
import CommonInput from "../../Components/Input/CommonInput";
import BasicNav from "../../Components/Navbar/UploadNav";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { MODIFY_PROFILE } from "../../store/Profile";
import { MODIFY_PRODUCT_IMAGE } from "../../store/Product";
import { getCookie } from "../../cookie";
import { SET_USERINFO } from "../../store/UserInfo";

// 한글,영어 표현식
const userNameRegex = /^[ㄱ-ㅎ가-힣a-zA-Z]*$/;

// 영문,숫자,특수문자 표현식
const Regex = /^[a-zA-Z0-9._]*$/;

function EditUserProfile() {
  const token = getCookie("accessToken");
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    name: "",
    id: "",
    intro: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    id: "",
    intro: "",
  });
  const [myProfileImg, setMyProfileImg] = useState("");
  const { profile } = useSelector((state) => state);
  const navigate = useNavigate();

  const errorDisabled = !(
    errorMessage.name ||
    errorMessage.id ||
    errorMessage.intro
  );
  const disabled = !(inputValue.name && inputValue.id && inputValue.intro);

  // 프로필 설정값 가져오기
  useEffect(() => {
    setInputValue((prev) => ({
      ...prev,
      name: profile.username,
      id: profile.accountname,
      intro: profile.intro,
    }));
  }, [profile]);

  // NAME 유효성검사
  function handleUserName(e) {
    const userName = e.target.value;
    setInputValue((prev) => ({ ...prev, name: userName }));

    if (!userName) {
      setErrorMessage((prev) => ({
        ...prev,
        name: "사용자 이름을 입력해주세요.",
      }));
    } else if (userName.length < 2 || userName.length > 10) {
      setErrorMessage((prev) => ({
        ...prev,
        name: "2~10자 이내만 가능합니다.",
      }));
    } else if (!userNameRegex.test(userName)) {
      setErrorMessage((prev) => ({ ...prev, name: "한글,영문만 가능합니다." }));
    } else {
      setErrorMessage((prev) => ({ ...prev, name: "" }));
    }
  }

  // ID 유효성검사
  function handleUserId(e) {
    const userId = e.target.value;
    setInputValue((prev) => ({ ...prev, id: userId }));

    if (!userId) {
      setErrorMessage((prev) => ({ ...prev, id: "계정 ID를 입력해주세요." }));
    } else if (!Regex.test(userId)) {
      setErrorMessage((prev) => ({
        ...prev,
        id: "영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.",
      }));
    } else {
      setErrorMessage((prev) => ({ ...prev, id: "" }));
    }
  }
  // intro 유효성검사
  function handleUserIntro(e) {
    const userIntro = e.target.value;
    setInputValue((prev) => ({ ...prev, intro: userIntro }));

    if (!userIntro) {
      setErrorMessage((prev) => ({ ...prev, intro: "소개를 입력해주세요." }));
    } else {
      setErrorMessage((prev) => ({ ...prev, intro: "" }));
    }
  }

  // 이미지 미리보기
  function UserProfileImg(e) {
    const imgFile = e.currentTarget.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.onloadend = () => {
      setMyProfileImg(reader.result);
    };
  }

  // 한개의 이미지 API 로직
  async function productImg(imgFile) {
    const formData = new FormData();
    formData.append("image", imgFile);

    const productSeverImg = await dispatch(MODIFY_PRODUCT_IMAGE({ formData }));
    return productSeverImg.payload;
  }

  // 유저입력 데이터 핸들러
  async function handleSubmit(e) {
    e.preventDefault();
    const { userName, userID, aboutMe, imgFile } = e.target;

    const imgData = imgFile.files[0]
      ? await productImg(imgFile.files[0])
      : profile.image;

    // 유효성 검사 및 disabled
    if (!errorDisabled) {
      if (!!errorMessage.name) {
        setErrorMessage((prev) => ({
          ...prev,
          name: "잘못된 이름 입니다",
        }));
      }
      if (!!errorMessage.id) {
        setErrorMessage((prev) => ({ ...prev, id: "잘못된 ID 입니다." }));
      }
      if (!!errorMessage.intro) {
        setErrorMessage((prev) => ({ ...prev, intro: "소개를 작성해주세요." }));
      }
      return false;
    }

    const editUserData = {
      user: {
        username: userName.value,
        accountname: userID.value,
        intro: aboutMe.value,
        image: imgData,
      },
    };

    await dispatch(MODIFY_PROFILE({ editUserData, token }));

    //변경된 UserInfo 다시 불러오기
    await dispatch(SET_USERINFO(token));

    navigate(`/profile/${userID.value}`);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <BasicNav
          children="저장"
          btnDisabled={!disabled || false ? false : true}
          bgColor={disabled || false ? "light" : "accent"}
        />
        <EditProfileContainer>
          <ProfileContainer>
            <EditImgContainer>
              <BasicProfileImg
                src={myProfileImg ? myProfileImg : profile.image}
              />
              <label htmlFor="file">
                <UploadImgDiv></UploadImgDiv>
              </label>
              <UploadImgInput
                type="file"
                name="imgFile"
                id="file"
                onChange={UserProfileImg}
              />
            </EditImgContainer>
          </ProfileContainer>
          <InputContainer>
            <CommonInput
              label="사용자 이름"
              type="text"
              placeholder="2~10자 이내여야 합니다."
              name="userName"
              onChange={handleUserName}
              // required={true}
              value={inputValue.name}
            />
            <Warning>{errorMessage.name}</Warning>
            <CommonInput
              label="계정 ID"
              type="text"
              placeholder="영문,숫자,특수문자(.),(_))만 사용 가능합니다."
              name="userID"
              onChange={handleUserId}
              // required={true}
              value={inputValue.id}
            />
            <Warning>{errorMessage.id}</Warning>
            <CommonInput
              label="소개"
              type="text"
              placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
              name="aboutMe"
              onChange={handleUserIntro}
              value={inputValue.intro}
            />
            <Warning>{errorMessage.intro}</Warning>
          </InputContainer>
        </EditProfileContainer>
      </form>
    </>
  );
}

export default EditUserProfile;

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
  & > div > input {
    &:focus {
      border-bottom-color: #f26e22;
      transition: border-bottom-color 200ms;
    }
  }
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
