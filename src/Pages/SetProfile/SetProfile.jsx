import styled from "styled-components";
import { useState } from "react";
import BasicProfileImg from "../../Components/BasicProfileImg";
import UploadFile from "../../Components/UploadFile";
import CommonInput from "../../Components/CommonInput";
import CommonButton from "../../Components/button/CommonButton";
import { useNavigate, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { removeCookie, setCookie } from "../../cookie";

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
  cursor: pointer;
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
    :last-child {
      margin-bottom: 30px;
    }
  }
  & > div > div > input {
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

function SetProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");
  const [intro, setIntro] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [accountnameError, setAccountnameError] = useState("");
  const [introError, setIntroError] = useState("");
  const [validationError, setValidationError] = useState("");

  // 이메일, 비밀번호 가져오기
  const location = useLocation();
  const { email, password } = { ...location.state };

  function handleUsernameChange(e) {
    const { value } = e.target;
    setUsername((prev) => {
      usernameValidation(value);
      return value;
    });
  }
  function handleAccountnameChange(e) {
    const { value } = e.target;
    setAccountname((prev) => {
      accountnameValidation(value);
      return value;
    });
  }
  function handleIntroChange(e) {
    const { value } = e.target;
    setIntro((prev) => {
      introValidation(value);
      return value;
    });
  }

  function usernameValidation(username) {
    const userNameRegex = /^[ㄱ-ㅎ가-힣a-zA-Z]{2,10}$/;
    if (!username) {
      setUsernameError("사용자 이름을 입력해주세요.");
    } else if (username.length < 2 || username.length > 10) {
      setUsernameError("2~10자 이내만 가능합니다.");
    } else if (!userNameRegex.test(username)) {
      setUsernameError("한글,영문만 가능합니다.");
    } else {
      setUsernameError("");
    }
  }
  function accountnameValidation(accountname) {
    const userIDRegex = /^[a-zA-Z0-9._]*$/;
    if (!accountname) {
      setAccountnameError("계정 ID를 입력해주세요.");
    } else if (!userIDRegex.test(accountname)) {
      setAccountnameError("영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.");
    } else {
      setAccountnameError("");
    }
  }
  function introValidation(intro) {
    if (!intro) {
      setIntroError("소개를 입력해주세요.");
    } else {
      setIntroError("");
    }
  }

  async function getAccountnameValidation(inputData) {
    try {
      setValidationError("");

      const response = await fetch(
        "https://mandarin.api.weniv.co.kr/user/accountnamevalid",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user: {
              accountname: accountname,
            },
          }),
        }
      );

      const { message } = await response.json();
      if (usernameError || accountnameError || introError) {
        setValidationError("올바른 양식이 아닙니다.");
        return false;
      } else if (message !== "사용 가능한 계정ID 입니다.") {
        setValidationError(message);
        return false;
      }
      return true;
    } catch (error) {
      console.log(error);
    }
  }

  async function getRegisteredData(inputData) {
    try {
      const response = await fetch(`https://mandarin.api.weniv.co.kr/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputData),
      });

      const { user } = await response.json();

      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async function getLogin() {
    try {
      const response = await fetch(
        `https://mandarin.api.weniv.co.kr/user/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user: {
              email,
              password,
            },
          }),
        }
      );

      const { user } = await response.json();

      setCookie("accessToken", user.token, {
        path: "/",
        secure: true,
        sameSite: "strict",
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { username, accountname, intro } = e.target;

    // 비동기함수를 기다렸다가 벨리데이션에 따라 false 혹은 true를 반환
    const result = await getAccountnameValidation(accountname.value);

    //false면 함수 종료
    if (!result) return;

    const inputData = {
      user: {
        username: username.value,
        accountname: accountname.value,
        intro: intro.value,
        email,
        password,
        image: "https://mandarin.api.weniv.co.kr/1641906557953.png",
      },
    };

    const userData = await getRegisteredData(inputData);

    if (userData) {
      getLogin();
    } else {
      return;
    }

    navigate("/feed");
  }

  return (
    <Container>
      <Title>프로필 설정</Title>
      <TitleDesc>나중에 언제든지 변경할 수 있습니다.</TitleDesc>
      <form onSubmit={handleSubmit}>
        <ProfileImgContainer>
          <BasicProfileImg />
          <UploadfileImgBtn>
            <Uploadfile />
          </UploadfileImgBtn>
        </ProfileImgContainer>
        <TextContainer>
          <div>
            <CommonInput
              name="username"
              label="사용자 이름"
              type="text"
              placeholder="2~10자 이내여야 합니다."
              onChange={handleUsernameChange}
              required="required"
            />
            {usernameError && <Warning>*{usernameError}</Warning>}
          </div>
          <div>
            <CommonInput
              name="accountname"
              label="계정 ID"
              type="text"
              placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
              onChange={handleAccountnameChange}
              required="required"
            />
            {accountnameError && <Warning>*{accountnameError}</Warning>}
          </div>
          <div>
            <CommonInput
              name="intro"
              label="소개"
              type="text"
              placeholder="자신과 쉐어할 상품에 대해 소개해주세요!"
              onChange={handleIntroChange}
              required="required"
            />
            {introError && <Warning>*{introError}</Warning>}
          </div>
        </TextContainer>
        {validationError && <Warning>*{validationError}</Warning>}
        <CommonButton
          size="lg"
          bgColor={!(username && accountname && intro) ? "light" : "accent"}
          children="우주쉐어 시작하기"
          disabled={!(username && accountname && intro)}
        />
      </form>
    </Container>
  );
}

export default SetProfile;
