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
import { USER_ID_PATTERN, USER_NAME_PATTERN } from "../../constant/regex";
import { useForm } from "react-hook-form";
import backProfileImg from "../../assets/Ellipse-1.png";
import { accountnameValidate } from "../../api/auth";

function EditUserProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = getCookie("accessToken");
  const [disabled, setDisable] = useState(true);
  const [myProfileImg, setMyProfileImg] = useState("");
  const { profile } = useSelector((state) => state);
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: profile.username,
      userID: profile.accountname,
      aboutMe: profile.intro,
      imgFile: profile.image ?? backProfileImg,
    },
  });
  const inputData = watch();

  useEffect(() => {
    let file;
    if (inputData.imgFile instanceof FileList && inputData.imgFile.length > 0) {
      file = inputData.imgFile[0];
      setMyProfileImg(URL.createObjectURL(file));
    }
    return () => URL.revokeObjectURL(file);
  }, [inputData.imgFile]);

  useEffect(() => {
    const { userName, userID, aboutMe, imgFile } = inputData;
    if (userName && userID && aboutMe && imgFile) {
      return setDisable(false);
    }
    setDisable(true);
  }, [inputData]);

  // 한개의 이미지 API 로직
  async function productImg(imgFile) {
    const formData = new FormData();
    formData.append("image", imgFile);

    const productSeverImg = await dispatch(MODIFY_PRODUCT_IMAGE({ formData }));
    return productSeverImg.payload;
  }

  // 유저입력 데이터 핸들러
  async function isValid({ userName, userID, aboutMe, imgFile }) {
    if (!(profile.accountname === userID)) {
      const message = await accountnameValidate({ user: { accountname: userID } });

      if (!(message === "사용 가능한 계정ID 입니다.")) return setError("userID", { message });
    }

    const imgData = imgFile[0] ? await productImg(imgFile[0]) : profile.image;

    const editUserData = {
      user: {
        username: userName,
        accountname: userID,
        intro: aboutMe,
        image: imgData,
      },
    };

    // 프로필 수정
    await dispatch(MODIFY_PROFILE({ editUserData }));

    // 변경된 UserInfo 다시 불러오기
    await dispatch(SET_USERINFO(token));

    navigate(`/profile/${userID}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit(isValid)}>
        <BasicNav children="저장" btnDisabled={disabled} bgColor={disabled ? "light" : "main"} />
        <EditProfileContainer>
          <ProfileContainer>
            <EditImgContainer>
              <BasicProfileImg src={myProfileImg ? myProfileImg : profile.image} />
              <label htmlFor="file">
                <UploadImgDiv />
              </label>
              <UploadImgInput type="file" id="file" {...register("imgFile")} />
            </EditImgContainer>
          </ProfileContainer>
          <InputContainer>
            <CommonInput
              label="사용자 이름"
              placeholder="2~10자 이내여야 합니다."
              register={register("userName", {
                required: "사용자 이름을 입력해주세요.",
                pattern: {
                  value: USER_NAME_PATTERN,
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
            <CommonInput
              label="계정 ID"
              placeholder="영문,숫자,특수문자(.),(_))만 사용 가능합니다."
              register={register("userID", {
                required: "계정 ID를 입력해주세요.",
                pattern: {
                  value: USER_ID_PATTERN,
                  message: "영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.",
                },
                maxLength: {
                  value: 30,
                  message: "30자 이내여야 합니다.",
                },
              })}
            />
            <Warning>{errors?.userID?.message}</Warning>
            <CommonInput
              label="소개"
              placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
              register={register("aboutMe", {
                required: "소개를 입력해주세요.",
              })}
            />
            <Warning>{errors?.aboutMe?.message}</Warning>
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
