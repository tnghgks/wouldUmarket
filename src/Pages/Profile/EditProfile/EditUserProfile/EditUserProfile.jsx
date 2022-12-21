import styled from "styled-components";
import BasicProfileImg from "../../../../Components/BasicProfileImg";
import ImgButton from "../../../../assets/upload-file.png";
import CommonInput from "../../../../Components/CommonInput";
import BasicNav from "../../../../Components/Navbar/UploadNav";
import { useDispatch, useSelector } from "react-redux";
import { SET_EDITPROFILE } from "../../../../store/Editprofile";
import { getCookie } from "../../../../cookie";
import { GET_IMAGE } from "../../../../store/image";

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

function EditUserProfile() {
  const token = getCookie("accessToken");
  const dispatch = useDispatch();

  async function getUserImg(formData) {
    try {
      const res = await fetch(
        `https://mandarin.api.weniv.co.kr/image/uploadfile`,
        {
          method: "POST",
          body: formData,
        }
      );
      const imgfile = await res.json();
      if (!imgfile) return;
      console.log(imgfile);

      dispatch(GET_IMAGE(imgfile));
    } catch (error) {
      console.log(error);
    }
  }

  async function getUserProfile(editUserdata) {
    try {
      const respones = await fetch(`https://mandarin.api.weniv.co.kr/user`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(editUserdata),
      });
      const userprofile = await respones.json();
      if (!userprofile) return;

      dispatch(SET_EDITPROFILE(userprofile));
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { userName, userID, aboutMe, imgfile } = e.target;

    const editUserdata = {
      user: {
        username: userName.value,
        accountname: userID.value,
        intro: aboutMe.value,
        image: imgfile.value,
      },
    };

    const formData = new FormData();
    formData.append("image", imgfile.files[0]);

    getUserProfile(editUserdata);
    getUserImg(formData);
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
              placeholder={"2~10자 이내여야 합니다."}
              name={"userName"}
            />
            <CommonInput
              label="계정 ID"
              type="text"
              placeholder={"영문,숫자,특수문자(.),(_))만 사용 가능합니다."}
              name={"userID"}
            />
            <CommonInput
              label="소개"
              type="text"
              placeholder={"자신과 판매할 상품에 대해 소개해 주세요!"}
              name={"aboutMe"}
            />
          </InputContainer>
        </EditProfileContainer>
      </form>
    </>
  );
}

export default EditUserProfile;
