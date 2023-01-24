import styled from "styled-components";
import { useState, useEffect } from "react";
import BasicProfileImg from "../../Components/ImageComponents/BasicProfileImg";
import CommonInput from "../../Components/Input/CommonInput";
import CommonButton from "../../Components/Button/CommonButton";
import { useNavigate, useLocation } from "react-router";
import { setCookie } from "../../cookie";
import ImgButton from "../../assets/upload-file.png";
import {
  SetProfileImg,
  IdValidation,
  GetLogin,
  RegisteredData,
} from "../../api/setprofile";
import { useForm } from "react-hook-form";
import { USER_ID_PATTEN, USER_NAME_PATTEN } from "../../constant/regex";

function SetProfile() {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const url = "https://mandarin.api.weniv.co.kr/";
  const [disable, setDisable] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      userID: "",
      intro: "",
      userImg: "",
    },
  });
  const profileImg = watch("userImg");
  const inputData = watch();

  useEffect(() => {
    setFocus("userName");
  }, [setFocus]);

  useEffect(() => {
    let file;
    if (profileImg instanceof FileList && profileImg.length > 0) {
      file = profileImg[0];
      setImage(URL.createObjectURL(file));
    }
    return () => URL.revokeObjectURL(file);
  }, [profileImg]);

  useEffect(() => {
    const { userName, userID, intro, userImg } = inputData;
    if (userName || userID || intro || userImg) {
      return setDisable(false);
    }
    setDisable(true);
  }, [inputData]);

  // 이메일, 비밀번호 가져오기
  const location = useLocation();
  const { email, password } = { ...location.state };

  // 프로필 이미지 API
  async function profileImgFile(userImg) {
    const formData = new FormData();
    formData.append("image", userImg);

    const imgData = await SetProfileImg(formData);
    if (!imgData) return;
    return url + imgData;
  }

  // 계정ID 유효성 검사
  async function getAccountnameValidation(userIDValue) {
    const message = await IdValidation(userIDValue);
    if (message !== "사용 가능한 계정ID 입니다.") {
      return setError("userID", { message });
    }
    return true;
  }

  // 회원가입 API
  async function getRegisteredData(inputUserData) {
    const data = await RegisteredData(inputUserData);
    if (data.message !== "회원가입 성공") {
      alert("입력값을 확인해주세요.");
      return false;
    }
    return data.user;
  }

  // 로그인 API
  async function getLogin() {
    const user = await GetLogin(email, password);
    setCookie("accessToken", user.token, {
      path: "/",
      secure: true,
      sameSite: "strict",
    });
  }

  async function isValid({ userName, userID, intro, userImg }) {
    // 비동기함수를 기다렸다가 벨리데이션에 따라 false 혹은 true를 반환
    const result = await getAccountnameValidation(userID);
    //false면 함수 종료
    if (!result) return;
    const imgFile = userImg[0] ? await profileImgFile(userImg[0]) : "";
    const inputUserData = {
      user: {
        username: userName,
        accountname: userID,
        intro: intro,
        email: email,
        password: password,
        image: imgFile,
      },
    };
    const userData = await getRegisteredData(inputUserData);

    if (userData) {
      await getLogin();
    } else {
      return;
    }

    navigate("/feed");
  }

  return (
    <Container>
      <Title>프로필 설정</Title>
      <TitleDesc>나중에 언제든지 변경할 수 있습니다.</TitleDesc>
      <form onSubmit={handleSubmit(isValid)}>
        <ProfileImgContainer>
          <BasicProfileImg src={image ? image : ""} />
          <label htmlFor="file">
            <UploadImgDiv></UploadImgDiv>
          </label>
          <UploadImgInput type="file" id="file" {...register("userImg")} />
        </ProfileImgContainer>
        <TextContainer>
          <legend className="ir-hidden">프로필정보</legend>
          <div>
            <CommonInput
              label="사용자 이름"
              placeholder="2~10자 이내여야 합니다."
              register={register("userName", {
                required: "사용자 이름을 입력해주세요.",
                pattern: {
                  value: USER_NAME_PATTEN,
                  message: "한글,영문만 가능합니다.",
                },
                minLength: {
                  value: 2,
                  message: "2자 이상이어야 합니다.",
                },
                maxLength: {
                  value: 10,
                  message: "10자 이내여야 합니다.",
                },
              })}
            />
            <Warning>{errors?.userName?.message}</Warning>
          </div>
          <div>
            <CommonInput
              label="계정 ID"
              placeholder="영문,숫자,특수문자(.),(_))만 사용 가능합니다."
              register={register("userID", {
                required: "계정 ID를 입력해주세요.",
                pattern: {
                  value: USER_ID_PATTEN,
                  message: "영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.",
                },
                maxLength: {
                  value: 30,
                  message: "30자 이내여야 합니다.",
                },
              })}
            />
            <Warning>{errors?.userID?.message}</Warning>
          </div>
          <div>
            <CommonInput
              label="소개"
              placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
              register={register("intro", {
                required: "소개를 입력해주세요.",
              })}
            />
            <Warning>{errors?.intro?.message}</Warning>
          </div>
        </TextContainer>
        <CommonButton
          size="lg"
          bgColor={disable ? "light" : "main"}
          children="우주쉐어 시작하기"
          disabled={disable}
          onClick={() => clearErrors("form")}
        />
      </form>
    </Container>
  );
}

export default SetProfile;

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

const TextContainer = styled.fieldset`
  & > div {
    :nth-child(3) {
      margin: 16px 0;
    }
    :last-child {
      margin-bottom: 30px;
    }
  }
  & > div > div > input {
    margin-bottom: 3px;
    &:focus {
      border-bottom-color: var(--subColor);
      transition: border-bottom-color 200ms;
    }
  }
`;

const Warning = styled.p`
  font-size: 1.2rem;
  color: #eb5757;
`;
